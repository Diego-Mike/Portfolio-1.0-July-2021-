import styles from "styled-components";

// Responsive

const ResponsiveProject = {
  responsive1: "@media screen and (max-width: 1150px)",
  responsive2: "@media screen and (max-width: 990px)",
  responsive3: "@media screen and (max-width: 850px)",
  responsive4: "@media screen and (max-width: 720px)",
  responsive5: "@media screen and (max-width: 570px)",
  responsive6: "@media screen and (max-width: 470px)"
};

//

export const ProjectsHero = styles.section`

width: 100%;
min-height: 800px;

margin-top: 20rem;

display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;

h2{
    font-size: 5rem;
    font-weight: 500;

    margin-top: 10rem;
    margin-left: 8rem;

    ${ResponsiveProject.responsive1}{
        margin-left: 0rem;
    }

    ${ResponsiveProject.responsive3}{
        font-size: 4.5rem;
    }

    ${ResponsiveProject.responsive4}{
        font-size: 4.3rem;
    }

    ${ResponsiveProject.responsive6}{
        font-size: 4.1rem;
    }

}

${ResponsiveProject.responsive1}{
    align-items: center;
}

`;

export const ProjectsWrapper = styles.div`

width: 87.8%;
height: 350px;
margin: 0 auto;

margin-top: 9rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

&:last-child{
    margin-bottom: 4rem;
}

${ResponsiveProject.responsive1}{
    width: 95%;
}

${ResponsiveProject.responsive2}{
    width: 58%;
    height: 650px;

    flex-direction: column-reverse;

    margin-top: 15rem;

    &:nth-child(6){
        height: 820px;
    }

    &:last-child{
        height: 820px;
    }

}

${ResponsiveProject.responsive3}{
    width: 68%;
}

${ResponsiveProject.responsive4}{
    width: 75%;
}

${ResponsiveProject.responsive5}{
    width: 80%;
}

${ResponsiveProject.responsive6}{
    width: 87%;
    justify-content: space-around;
}

`;

export const ProjectsWrapperImg = styles.div`

position: relative;

width: 50%;
height: 100%;

border-radius: 0.4rem;
box-shadow: 0.2px 0.2px 4px rgba(255, 255, 255, 0.7);

cursor: pointer;
overflow: hidden;

opacity: 0.2;
transition: 0.3s ease;

&:hover{
    opacity: 0.8;
}

${ResponsiveProject.responsive2}{
    width: 100%;
    height: 47%;
}

${ResponsiveProject.responsive4}{
    height: 42%;
}

${ResponsiveProject.responsive5}{
    height: 35%;
}

${ResponsiveProject.responsive6}{
    height: 30%;
}


`;

export const ProjectsWrapperImg2 = styles.div`

position: relative;

width: 100%;
height: 41%;

border-radius: 0.4rem;
box-shadow: 0.2px 0.2px 4px rgba(255, 255, 255, 0.7);

cursor: pointer;
overflow: hidden;

opacity: 0.2;
transition: 0.3s ease;

&:hover{
    opacity: 0.8;
}

${ResponsiveProject.responsive4}{
    height: 36%;
}

${ResponsiveProject.responsive5}{
    height: 29%;
}

${ResponsiveProject.responsive6}{
    height: 24%;
}

`;

export const ProjectsWrapperText = styles.div`

width: 50%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;

h3{
    font-size: 2.7rem;
    font-weight: 400;

    margin-left: 1.5rem;

    ${ResponsiveProject.responsive2}{
        margin-left: 0rem;
    }

    ${ResponsiveProject.responsive3}{
        font-size: 2.3rem;
    }

}

p{
    color: rgba(255, 255, 255, 0.6);

    font-size: 1.35rem;
    font-weight: 200;
    text-align: right;

    margin-top: 1rem;
    margin-left: 1.1rem;

    ${ResponsiveProject.responsive2}{
        margin-left: 0rem;
        text-align: center;
    }

    ${ResponsiveProject.responsive3}{
        font-size: 1.3rem;
    }

}

span{
    color: #6C63FF;
    font-size: 1.4rem;
    text-align: right;

    margin-top: 4.5rem;
    margin-left: 1.1rem;

    ${ResponsiveProject.responsive2}{
        margin-left: 0rem;
        text-align: center;
    }

    ${ResponsiveProject.responsive3}{
        font-size: 1.35rem;
    }
}

a{
    font-size: 1.45rem;
    
    border-radius: 0.45rem;
    background: #F50057;

    margin-top: 2rem;
    padding: 0.55rem 3rem;

    ${ResponsiveProject.responsive3}{
        font-size: 1.4rem;
    }
    
}

${ResponsiveProject.responsive2}{
    width: 100%;
    height: 50%;

    align-items: center;
}

`;
