import styles from "styled-components";

// Responsive

const ResponsiveSkills = {
  specialResponsive: "@media screen and (max-width: 1200px)",
  responsive1: "@media screen and (max-width: 800px)",
  responsive2: "@media screen and (max-width: 400px)"
};

//

export const SkillsHero = styles.section`

width: 100%;
min-height: 670px;

display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;

h2{
    font-size: 5rem;
    font-weight: 500;

    margin-top: 10rem;
    margin-left: 8rem;

    ${ResponsiveSkills.specialResponsive}{
        font-size: 4rem;
        margin-left: 0rem;
    }

    ${ResponsiveSkills.responsive1}{
        font-size: 3.5rem;
    }

}

margin-top: 20rem;

${ResponsiveSkills.specialResponsive}{
    align-items: center;
}

`;

export const SkillsFronted = styles.div`

width: 100%;
min-height: 80px;

display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-around;

margin-top: 9rem;

a{ 
    position: relative;

    width: 65px;
    height: 65px;

    &:nth-child(5){
        width: 90px;
        background: white;

        border-radius: 0.4rem;

        ${ResponsiveSkills.responsive1}{
            width: 85px;
        }

        ${ResponsiveSkills.responsive2}{
            width: 80px;
        }

    }

    ${ResponsiveSkills.responsive1}{
        width: 60px;
        height: 60px;
        margin: 2.5rem 3rem 0rem 3rem;
    }

    ${ResponsiveSkills.responsive2}{
        width: 55px;
        height: 55px;
    }

}

${ResponsiveSkills.responsive1}{
    margin-top: 5.5rem;
}

`;

export const SkillsBackend = styles.div`

width: 100%;
min-height: 80px;

display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-evenly;

margin-top: 4.5rem;

a{ 
    position: relative;

    width: 75px;
    height: 70px;

    &:nth-child(2){
        width: 90px;
        height: 62px;
        background: white;

        border-radius: 0.4rem;

        ${ResponsiveSkills.responsive1}{
            width: 85px;
            height: 57px;
        }

        ${ResponsiveSkills.responsive2}{
            width: 80px;
            height: 52px;
        }

    }

    ${ResponsiveSkills.responsive1}{
        width: 70px;
        height: 65px;
    }
    
    ${ResponsiveSkills.responsive2}{
        width: 65px;
        height: 60px;
    }

}

${ResponsiveSkills.responsive1}{
    margin-top: 7.5rem;
}

`;

export const SkillsTS = styles.div`

width: 100%;
height: 80px;

display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
justify-content: center;

margin-top: 4.5rem;

a{ 
    position: relative;

    width: 65px;
    height: 65px;

    ${ResponsiveSkills.responsive1}{
        width: 60px;
        height: 60px;
    }

    ${ResponsiveSkills.responsive2}{
        width: 55px;
        height: 55px;
    }

}

${ResponsiveSkills.responsive1}{
    margin-top: 2rem;
}

`;
