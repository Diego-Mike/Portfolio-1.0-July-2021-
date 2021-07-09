import styles from "styled-components";

// Responsive

const ResponsivePresentation = {
  responsive1: "@media screen and (max-width: 1220px)",
  responsive2: "@media screen and (max-width: 1120px)",
  responsive3: "@media screen and (max-width: 750px)",
  responsive4: "@media screen and (max-width: 530px)",
  responsive5: "@media screen and (max-width: 420px)"
};

//

export const PresentationHero = styles.section`

width: 100%;
height: 663px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-top: 20rem;

overflow: hidden;

${ResponsivePresentation.responsive2}{
    flex-direction: column;
    height: 725px;
}

${ResponsivePresentation.responsive3}{
    height: 800px;
}

${ResponsivePresentation.responsive4}{
    height: 730px;
}

`;

export const PresentationImg = styles.div`

width: 50%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

div{
    position: relative;

    width: 600px;
    height: 260px;

    ${ResponsivePresentation.responsive1}{
        width: 500px;
        height: 210px;
    }

    ${ResponsivePresentation.responsive3}{
        width: 420px;
        height: 180px;
    }

    ${ResponsivePresentation.responsive4}{
        width: 360px;
        height: 155px;
    }

    ${ResponsivePresentation.responsive5}{
        width: 260px;
        height: 140px;
    }

}

${ResponsivePresentation.responsive2}{
    width: 100%;
    height: 50%;
    align-items: flex-end;
}

${ResponsivePresentation.responsive3}{
    height: 35%;
}

`;

export const PresentationText = styles.div`

width: 50%;
height: 100%;

display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;

h2{
    font-size: 5rem;
    font-weight: 500;
    
    margin-top: 13.5rem;
    margin-bottom: 2rem;
    margin-left: 8rem;

    ${ResponsivePresentation.responsive1}{
        font-size: 4.5rem;
        margin-left: 7.5rem;
    }
    
    ${ResponsivePresentation.responsive2}{
        text-align: center;

        margin-top: 6rem;
        margin-left: 0rem;
    }

    ${ResponsivePresentation.responsive3}{
        font-size: 4.2rem;
    }

    ${ResponsivePresentation.responsive4}{
        font-size: 4rem;
    }

    ${ResponsivePresentation.responsive5}{
        font-size: 3.8rem;
    }

}

p{
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.66rem;
    font-weight: 200;

    margin-left: 8.2rem;

    ${ResponsivePresentation.responsive1}{
        font-size: 1.6rem;
        margin-left: 8rem;
    }
    
    ${ResponsivePresentation.responsive2}{
        text-align: center;
        margin-left: 0rem;
    }

    ${ResponsivePresentation.responsive3}{
        font-size: 1.5rem;
    }

    ${ResponsivePresentation.responsive4}{
        font-size: 1.35rem;
    }

    ${ResponsivePresentation.responsive5}{
        font-size: 1.3rem;
    }

}


${ResponsivePresentation.responsive2}{
    width: 100%;
    height: 50%;

    align-items: center;
}

${ResponsivePresentation.responsive3}{
    height: 65%;
}


`;
