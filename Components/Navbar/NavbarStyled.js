import styles from "styled-components";

// Responsive

const ResponsiveNavbar = {
  responsive1: "@media screen and (max-width: 1015px)",
  responsive2: "@media screen and (max-width: 740px)",
  responsive3: "@media screen and (max-width: 520px)"
};

//

export const NavbarHero = styles.section`

position: fixed;
top: 0;

width: 100%;
height: 62px;

background: black;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

z-index: 10;

${ResponsiveNavbar.responsive2}{
    height: 57px;
}

`;

export const GithubIcon = styles.a`

position: relative;

width: 33px;
height: 33px;

margin-left: 7.5rem;

cursor: pointer;

${ResponsiveNavbar.responsive1}{
    margin-left: 5rem;
}

${ResponsiveNavbar.responsive2}{
    margin-left: 4rem;

    width: 31.5px;
    height: 31.5px;
}

${ResponsiveNavbar.responsive3}{
    margin-left: 2.5rem;
}

`;

export const NavbarLinks = styles.div`

width: 45%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

margin-right: 2rem;

${ResponsiveNavbar.responsive1}{
    width: 60%;

    margin-right: 4rem;
    justify-content: flex-end;
}

${ResponsiveNavbar.responsive2}{
    margin-right: 2rem;

    width: 70%;
}

${ResponsiveNavbar.responsive3}{
    margin-right: 1rem;

    width: 80%;
}

`;

export const Links = styles.a`

    font-size: 1.5rem;

    &:nth-child(2){
        margin: 0rem 0rem 0rem 6rem;

        ${ResponsiveNavbar.responsive2}{
            margin: 0rem 0rem 0rem 4rem;
        }

        ${ResponsiveNavbar.responsive3}{
            margin: 0rem 0rem 0rem 2rem;
        }

    }

    &:nth-child(3){
        margin: 0rem 6rem;

        ${ResponsiveNavbar.responsive2}{
            margin: 0rem 4rem;
        }

        ${ResponsiveNavbar.responsive3}{
            margin: 0rem 2rem;
        }

    }

    ${ResponsiveNavbar.responsive1}{
        font-size: 1.4rem;
    }

    ${ResponsiveNavbar.responsive2}{
        font-size: 1.3rem;
    }

    ${ResponsiveNavbar.responsive3}{
        font-size: 1.2rem;
    }

`;
