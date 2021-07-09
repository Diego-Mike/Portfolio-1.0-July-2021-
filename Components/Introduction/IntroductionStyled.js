import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const ResponsiveIntroduction = {
  responsive1: "@media screen and (max-width: 950px)",
  responsive2: "@media screen and (max-width: 700px)",
  responsive3: "@media screen and (max-width: 600px)",
  responsive4: "@media screen and (max-width: 470px)",
  responsive5: "@media screen and (max-width: 385px)"
};

//

export const IntroductionHero = styles.section`

position: relative;

width: 100%;
height: 663px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

overflow: hidden;

`;

export const IntroductionBlack = styles(motion.div)`

width: 50%;
height: 100%;

background: rgba(255, 255, 255, 0.04);

`;

export const IntroductionText = styles(motion.div)`

position: absolute;
top: 50%;
transform: translateY(-50%);

width: 100%;
height: 35%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    font-size: 10rem;
    text-align: center;

    padding: 0rem 2rem;

    font-family: 'Pacifico', cursive;

    ${ResponsiveIntroduction.responsive1}{
        font-size: 8.5rem;
    }

    ${ResponsiveIntroduction.responsive2}{
        font-size: 7.5rem;
    }

    ${ResponsiveIntroduction.responsive3}{
        font-size: 6rem;
    }

    ${ResponsiveIntroduction.responsive4}{
        font-size: 5rem;
    }

    ${ResponsiveIntroduction.responsive5}{
        font-size: 4.3rem;
    }

}
 
p{
    color: rgba(255, 255, 255, 0.5);
    font-size: 3rem;
    font-weight: 200;

    padding-top: 3rem;

    ${ResponsiveIntroduction.responsive1}{
        font-size: 2.5rem;
        padding-top: 4rem;
    }

    ${ResponsiveIntroduction.responsive2}{
        font-size: 2.4rem;
    }

    ${ResponsiveIntroduction.responsive3}{
        font-size: 2.2rem;
    }

    ${ResponsiveIntroduction.responsive4}{
        font-size: 2rem;
    }

    ${ResponsiveIntroduction.responsive5}{
        font-size: 1.7rem;
    }

}

`;
