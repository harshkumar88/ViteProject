import { useEffect, useRef } from "react";
import { AnimatedContent } from ".";
import { features, supportFeature } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, sub_desc, content, index }) => (
  <motion.div
    whileHover={{ transform: "translateY(20px)" }}
    className={`flex flex-row md:p-6 p-3 rounded-[20px] md:w-[45%] w-[100%] lg:w-[23%]  sm:w-[80%] xs:w-[100%] ${
      index !== features.length - 1 ? "sm:mb-2" : "sm:mb-2"
    } feature-card`}
  >
    <div
      className={`w-[6%] h-[6%] rounded-full mt-1 ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={icon} alt="star" className="w-[100%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-gradient-dark text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <span>{sub_desc}</span>
        <br />
        <p className="font-poppins font-normal text-slate-600 text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
      <button
        type="button"
        className={`py-2 px-2 font-poppins font-medium text-[18px] text-slate-600 bg-blue-gradient rounded-[10px] outline-none ${styles} mt-2`}
      >
        Get Started
      </button>
    </div>
  </motion.div>
);

const Support = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <section
        data-scroll-section
        id="platform"
        className={`${styles.flexCenter} flex-col flex-wrap sm:mb-5 mb-6 pt-10 gap-3 `}
      >
        <span className=" text-gradient-dark xl:text-[50px] lg:text-[48px] md:text-[40px] text-[30px]">
          Intuitive and contextual support
        </span>
        <span
          className="text-slate-600 lg:text-[24px] text-[18px]"
          data-scroll
          data-scroll-speed="1"
        >
          Empower your support teams to deliver timely and consistent support at
          any scale
        </span>
      </section>
      <AnimatedContent>
        <section id="features" className={`${layout.section}  `}>
          <div className={`${layout.sectionwrapper} w-full flex-row `}>
            {supportFeature.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};

export default Support;
