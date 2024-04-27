import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-col flex-wrap sm:mb-5 mb-6 mt-10 gap-3 `}
  >
    <span className=" text-gradient-dark text-[38px]">
      Secure and intelligent conversational AI
    </span>
    <span className="text-slate-600">
      Advanced ML and NLP technologies continuously learning for improved
      understanding and personalized responses
    </span>
  </section>
);

export default Stats;
