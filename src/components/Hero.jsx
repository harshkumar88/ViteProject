import styles from "../style";
import GetStarted from "./GetStarted";
import { AnimatedContent } from ".";
import { useEffect, useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    const arr = [
      "F",
      "U",
      "L",
      "L",
      " ",
      "S",
      "T",
      "A",
      "C",
      "K",
      " ",
      "D",
      "E",
      "V",
      "E",
      "L",
      "O",
      "P",
      "E",
      "R",
    ];
    let id = -1;
    let end = false;
    const interval = setInterval(() => {
      id++;
      setContent((current) => {
        if (current?.length === 20) {
          end = true;
        } else if (current?.length === 0) {
          end = false;
          id = 0;
        }
        if (end) {
          return current.slice(0, current?.length - 1);
        } else {
          return current + arr[id];
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedContent>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} h-[70vh]`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-col justify-between items-center w-full  gap-16">
            <div className="flex flex-col gap-2">
              <div className="flex-1 font-poppins font-semibold ss:text-[68px]  flex flex-row gap-2 text-[28px] text-white  break-words ">
                <span>
                  {" "}
                  Greetings,{" "}
                  <span className="text-gradient">I'm Harsh Kumar</span>
                </span>
              </div>
              <h2 className="text-5xl font-poppins ss:text-[50px] text-[28px] ">
                <span className="text-gradient scale_animate"> {content}</span>
                <span className="text-white">|</span>
              </h2>
            </div>
            <Button className="text-white border-teal-200" text="Hire Me" />
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Hero;
