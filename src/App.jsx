import styles from "./style";
import { Business, Navbar, Hero, Support, Footer } from "./components";
import Management from "./components/Management";
import ContactManagement from "./components/ContactManagement";
import Opportunity from "./components/Opportunity";
import Invoice from "./components/Invoice";
import { useEffect, useRef, useState } from "react";
import { ZenomLogo } from "./assets";

const App = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState("");
  const [trigger, setTrigger] = useState(true);
  const [socketData, setSocketData] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(!trigger);
    }, 30000);

    return () => clearInterval(interval);
  }, [trigger]);

  useEffect(() => {
    if (ws && ws.current) {
      ws.current.close();
    }

    fetchDBData();

    ws.current = new WebSocket("ws://localhost:8888/websocket");

    ws.current.onopen = function (event) {
      console.log("WebSocket connected");
    };

    ws.current.onclose = function (event) {
      console.log("WebSocket disconnected");
    };

    ws.current.onmessage = function (event) {
      console.log("Message received: " + event.data);
      // handleEvent(event.data);
    };
  }, [trigger]);

  const handleEvent = (info) => {
    setSocketData([...socketData, info]);
  };

  useEffect(() => {
    console.log(socketData, "k");
  }, [socketData]);

  const handleSubmit = () => {
    if (ws && ws.current) {
      handleEvent(data);
      ws.current.send(
        JSON.stringify({
          msg: data,
          user: "harsh88",
        })
      );
    }
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    setLoader(false);
    // fetchDBData();
    window.addEventListener("scroll", function (event) {
      handleScroll();
    });
  }, []);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 800);
    }
  }, [loader]);

  function handleScroll() {
    const scrolledToTop = window.scrollY === 0;
    setChangeHeader(!scrolledToTop);
  }

  const fetchDBData = async () => {
    try {
      const response = await fetch("http://localhost:8888/messages");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSocketData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return loader ? (
    <div className="center_div">
      <img
        src={ZenomLogo}
        alt="Zenome"
        className={`w-[30vw] h-[30%] bg-black`}
        loading="eager"
      />
    </div>
  ) : (
    <div className="bg-primary w-full  relative">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${
          changeHeader ? "bg-blue-gradient" : "bg-white"
        } fixed_header`}
      >
        <div className={`w-full`}>
          <Navbar changeHeader={changeHeader} />
        </div>
      </div>{" "}
      <input type="text" onChange={handleChange} value={data} />
      <button onClick={handleSubmit} className="bg-blue-gradient">
        Submit
      </button>
      <div className={` ${styles.flexStart} hero_bg `}>
        <div className={`${styles.boxWidth}`}>
          <Hero socketData={socketData} />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxwrapperWidth}  `}>
          <Business />
          <Support />
          <Management />
          <ContactManagement />
          <Opportunity />
          <Invoice />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
