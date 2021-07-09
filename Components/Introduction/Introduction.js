import Image from "next/image";

import {
  IntroductionHero,
  IntroductionBlack,
  IntroductionText
} from "./IntroductionStyled";

const Introduction = () => {
  // Framer motion - Slide and PopUp

  const Slide1 = {
    hidden: { x: -800 },
    visible: { x: 0, transition: { duration: 1.2, delay: 0.4 } }
  };

  const Slide2 = {
    hidden: { x: 800 },
    visible: { x: 0, transition: { duration: 1.2, delay: 0.4 } }
  };

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2, duration: 0.35 } }
  };

  return (
    <div>
      <IntroductionHero>
        {/* Black squares with low opacity */}
        <IntroductionBlack
          variants={Slide1}
          initial="hidden"
          animate="visible"
        />
        <IntroductionBlack
          variants={Slide2}
          initial="hidden"
          animate="visible"
        />
        {/* Text */}
        <IntroductionText variants={PopUp} initial="hidden" animate="visible">
          <h1>Diego Cifuentes</h1>
          <p>Full stack junior dev.</p>
        </IntroductionText>
      </IntroductionHero>
    </div>
  );
};

export default Introduction;
