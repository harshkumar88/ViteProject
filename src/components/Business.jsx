import { AnimatedContent } from ".";
import { harshProfile } from "../assets";
import { features } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index, activeScroll }) => (
  <div
    className={`flex flex-row md:p-6 p-3 rounded-[20px] ${
      index !== features.length - 1 ? "sm:mb-2" : "sm:mb-2"
    } feature-card `}
  >
    <div
      className={`md:w-[64px] md:h-[64px]  sm:w-[64px] sm:h-[64px] w-[0] h-[0] rounded-full ${styles.flexCenter} bg-dimBlue `}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain  " />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient-dark text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-600 text-[16px] leading-[24px]">
        {content}
      </p>{" "}
      <button
        type="button"
        className={`py-2 px-2 mt-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none  w-fit`}
      >
        Resume
      </button>
    </div>
  </div>
);

const Business = () => (
  <>
    <section
      id="product"
      className={`${styles.flexCenter} flex-col flex-wrap sm:mb-5 mb-6 pt-10 gap-3  `}
    >
      <span className=" text-gradient-dark xl:text-[50px] lg:text-[48px] md:text-[40px] text-[30px]">
        About Me
      </span>
      <span className="text-slate-600 lg:text-[24px] text-[18px]">
        As a Full Stack developer, my name is Harsh.
      </span>
    </section>
    <AnimatedContent>
      <section
        id="features"
        className={`flex px-3 ss:flex-row justify-between`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`${layout.sectionInfo} ss:w-[25%]  `}
        >
          <img src={harshProfile} className="rounded-full" />
        </motion.div>

        <div
          className={`${layout.sectionImg} ss:w-[60%]  text-justify flex-row `}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </AnimatedContent>
  </>
);

export default Business;
