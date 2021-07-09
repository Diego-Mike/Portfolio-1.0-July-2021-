import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import {
  PresentationHero,
  PresentationText,
  PresentationImg
} from "./PresentationStyled";

const Presentation = () => {
  const ChangeText = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <div id="presentation">
      <PresentationHero>
        {/* Text */}
        <PresentationText>
          <h2>Who am i ?</h2>
          {ChangeText ? (
            <p>
              Hi, i'm Diego Alejandro Cifuentes, i'm a 17 year <br /> old
              gentleman who loves making/creating <br /> everything related to
              web development <br /> and making people's lives better with
              <br />
              programming.
              <br /> <br />
              My main focus is on javascript since it's <br /> the principal
              language of modern <br /> applications.
              <br /> <br />
              I as a junior programmer, believe in hard <br /> work, focus,
              drive, and passion, but <br /> none of this would make sense
              without <br /> discipline.
            </p>
          ) : (
            <p>
              Hi, i'm Diego Alejandro Cifuentes, i'm a 17 year old gentleman
              <br />
              who loves making/creating everything related to web <br />
              development and making people's lives better with <br />
              programming.
              <br /> <br /> My main focus is on javascript since it's the
              principal <br /> language of modern applications.
              <br /> <br /> I as a junior programmer, believe in hard work,
              focus, drive, <br /> and passion, but none of this would make
              sense without
              <br />
              discipline.
            </p>
          )}
        </PresentationText>
        {/* Image */}
        <PresentationImg>
          <div>
            <Image
              src="/presentation.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </PresentationImg>
      </PresentationHero>
    </div>
  );
};

export default Presentation;
