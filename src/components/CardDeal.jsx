import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} py-12 px-6 sm:px-16`}>
    <div className={layout.sectionInfo}>
      <h2
        className={`${styles.heading2} text-gray-200 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInUp`}
      >
        Find a better card <br className="sm:block hidden" /> deal in a few easy
        steps.
      </h2>
      <p
        className={`${styles.paragraph} max-w-lg mt-5 text-gray-400 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInUp delay-100`}
      >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} relative`}>
      <img
        src={card}
        alt="card"
        className="w-[100%] h-[100%] transition-transform duration-700 ease-in-out transform hover:scale-105 animate-float"
      />
    </div>
  </section>
);

export default CardDeal;
