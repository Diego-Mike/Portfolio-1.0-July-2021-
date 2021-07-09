import Image from "next/image";

import {
  SkillsHero,
  SkillsFronted,
  SkillsBackend,
  SkillsTS
} from "./SkillsStyled";

const Skills = () => {
  return (
    <div id="skills">
      <SkillsHero>
        {/* Title */}
        <h2>Skills</h2>
        {/* Technologies */}
        <SkillsFronted>
          {/* Fronted */}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/html5.svg" alt="" layout="fill" objectFit="cover" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/css3.svg" alt="" layout="fill" objectFit="cover" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image src="/react.svg" alt="" layout="fill" objectFit="cover" />
          </a>
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <Image src="/redux.svg" alt="" layout="fill" objectFit="cover" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <Image
              src="/next-js.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/styled.png" alt="" layout="fill" objectFit="cover" />
          </a>
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/framer-motion.png"
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </SkillsFronted>
        {/* Backend */}
        <SkillsBackend>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <Image
              src="/node.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <Image
              src="/express.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <Image
              src="/mongodb.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </SkillsBackend>
        {/* Typescript */}
        <SkillsTS>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/Typescript.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </SkillsTS>
      </SkillsHero>
    </div>
  );
};

export default Skills;
