import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "../components";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card transition-transform duration-300 ease-in-out transform hover:scale-105`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-800`}
    >
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-[50%] h-[50%] object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
      />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} py-12 px-6 sm:px-16`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gray-200`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-lg mt-5 text-gray-400`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. But with hundreds
          of credit cards on the market, finding the right one can be
          challenging.
        </p>
        <Button styles="mt-10 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className={`${layout.sectionImg} flex flex-col gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
