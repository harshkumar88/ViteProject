import { AnimatedContent } from ".";
import { SalesWorkflow, star } from "../assets";
import { managementList } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const motionAnimation = {
  whileHover: {
    transform: "translateX(-100px)",
  },
};

const FeatureCard = () => (
  <motion.div
    {...(window.innerWidth > 1200 ? motionAnimation : {})}
    className={`flex flex-row md:p-6 sm:p-3 p-2 rounded-[20px] md:w-[33%] sm:w-[100%] xs:w-[100%] feature-card`}
  >
    <div className="flex-1 flex flex-col lg:ml-3 xl:ml-3 md:ml-2 sm:ml-2 ml-0 gap-5">
      <h4 className="font-poppins font-semibold text-gradient-dark lg:text-[35px] text-[30px]">
        Lead Management
      </h4>
      <p className="text-[20px] text-slate-700">
        Qualify and Nurture your leads through a tailored journey
      </p>
      <div className="flex-col xl:gap-5 lg:gap-5 md:gap-3 sm:gap-3 gap-2 flex">
        {managementList?.map((item) => {
          return (
            <div className="flex-1 flex flex-row ml-3 gap-5" key={item?.id}>
              <img src={star} style={{ width: "5%" }} />
              <span className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] text-slate-500">
                {item?.content}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const Management = () => (
  <>
    <section
      id="resources"
      className={`${styles.flexCenter} flex-col flex-wrap sm:mb-5 mb-6 pt-10 gap-3 `}
    >
      <span className=" text-gradient-dark xl:text-[50px] lg:text-[48px] md:text-[40px] text-[30px]">
        All in One Comprehensive CRM Suite
      </span>
      <span className="text-slate-600 lg:text-[24px] text-[18px]">
        Experience Streamlined Processes ,Faster Outcomes and Increased Revenue.
      </span>
    </section>
    <AnimatedContent>
      <section
        id="features"
        className={`${layout.section} w-[100%]  sm:m-auto gap-10  justify-between  `}
      >
        <div
          className={`${layout.sectionInfo} md:w-[70%] lg:w-[33%] w-[100%] sm:mb-4  `}
        >
          <img src={SalesWorkflow} style={{ width: "90%", margin: "auto" }} />
        </div>

        <FeatureCard />
      </section>
    </AnimatedContent>
  </>
);

export default Management;
