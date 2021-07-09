import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const ResponsiveContact = {
  responsive1: "@media screen and (max-width: 900px)",
  responsive2: "@media screen and (max-width: 650px)"
};

//

export const ContactHero = styles.section`

width: 100%;
height: 380px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

h2{
    color: rgba(255, 255, 255, 0.8);
    font-size: 3rem;
    font-weight: 300;

    text-align: center;

    span{
        font-weight: 500;
        cursor: pointer;
    }

    ${ResponsiveContact.responsive1}{
        font-size: 2.7rem;
    }

    ${ResponsiveContact.responsive2}{
        font-size: 2.5rem;
        padding: 0rem 1.5rem;
    }

}

margin-top: 25rem;

`;

export const ContactData = styles(motion.div)`

width: 100%;
height: 100px;

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

span{
    color: rgb(255, 255, 255, 0.8);
    font-size: 2rem;
    font-weight: 200;

    ${ResponsiveContact.responsive1}{
        font-size: 1.7rem;
    }

}

margin-top: 5rem;

${ResponsiveContact.responsive2}{
    height: 200px;

    margin-top: 2rem;

    flex-direction: column;
}

`;
