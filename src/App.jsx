import styles from "./style";
import { Business, Navbar, Hero, Support, Footer } from "./components";
import Management from "./components/Management";
import ContactManagement from "./components/ContactManagement";
import Opportunity from "./components/Opportunity";
import Invoice from "./components/Invoice";
import { useEffect, useState } from "react";
import { ZenomLogo } from "./assets";

const App = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
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
      </div>

      <div className={` ${styles.flexStart} hero_bg `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
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
