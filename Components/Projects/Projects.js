import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import {
  ProjectsHero,
  ProjectsWrapper,
  ProjectsWrapperImg,
  ProjectsWrapperText,
  ProjectsWrapperImg2
} from "./ProjectsStyled";

const Projects = () => {
  // Open website

  const Rick = () => {
    window.open("https://rick-and-morty-app-f3850.web.app/", "_blank");
  };

  const Genius = () => {
    window.open("https://react-genius-app.netlify.app/", "_blank");
  };

  const Costureria = () => {
    window.open("https://costureria-gloria.vercel.app/", "_blank");
  };

  const Crypto = () => {
    window.open("https://globa-crypto-currency.netlify.app/", "_blank");
  };

  const Daily = () => {
    window.open("https://daily-mern-app.netlify.app/", "_blank");
  };

  const DailyRepo = () => {
    window.open("https://github.com/Diego-Mike/Daily-App-Backend-", "_blank");
    window.open("https://github.com/Diego-Mike/Daily-App-Fronted-", "_blank");
  };

  const Facee = () => {
    window.open("https://facebook-diego-mike.vercel.app/", "_blank");
  };

  const FaceeRepo = () => {
    window.open(
      "https://github.com/Diego-Mike/Facebook-Clone-Next.js-Fronted",
      "_blank"
    );
    window.open(
      "https://github.com/Diego-Mike/Facebook-Clone-Backend-",
      "_blank"
    );
  };

  // Change image div - text

  const ChangeDiv = useMediaQuery({ query: "(max-width: 990px)" });

  const ChangeText = useMediaQuery({ query: "(max-width: 470px)" });

  return (
    <div id="projects">
      <ProjectsHero>
        {/* Title */}
        <h2>Projects</h2>

        {/* Projects */}

        {/* Rick and morty API */}
        <ProjectsWrapper>
          {/* Image */}
          <ProjectsWrapperImg onClick={Rick}>
            <Image
              src="/rick.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ProjectsWrapperImg>
          {/* Text */}
          <ProjectsWrapperText>
            <h3>Rick And Morty API</h3>
            {ChangeText ? (
              <p>
                Open the app, watch all rick and morty's <br /> characters, and
                pick your favorites ones, <br /> and if you don't find the one
                you're looking <br /> for, use the searchbar to find <br /> it
                quickly ! .
              </p>
            ) : (
              <p>
                Open the app, watch all rick and morty's characters, <br /> and
                pick your favorites ones, and if you don't find <br /> the one
                you're looking for, use the searchbar to <br /> find it quickly
                ! .
              </p>
            )}
            <span> React - Hooks - Redux </span>
            <a
              href="https://github.com/Diego-Mike/Rick-And-Morty-App"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </ProjectsWrapperText>
        </ProjectsWrapper>

        {/* Genius clone */}

        <ProjectsWrapper>
          {/* Image */}
          <ProjectsWrapperImg onClick={Genius}>
            <Image
              src="/genius.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ProjectsWrapperImg>
          {/* Text */}
          <ProjectsWrapperText>
            <h3>Genius clone</h3>
            {ChangeText ? (
              <p>
                Using two API'S, you can search your <br /> favorite artist song
                lyrics along with <br /> images and biography <br /> <br /> ( If
                it doesn't work it is because <br /> the API's down sadly ! )
              </p>
            ) : (
              <p>
                Using two API'S, you can search your favorite <br /> artist song
                lyrics along with images and biography <br /> <br /> ( If it
                doesn't work it is because the API's down sadly ! )
              </p>
            )}

            <span> React - Hooks - Styled components</span>
            <a
              href="https://github.com/Diego-Mike/Genius-Clone"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </ProjectsWrapperText>
        </ProjectsWrapper>

        {/* Costurería gloria */}

        <ProjectsWrapper>
          {/* Image */}
          <ProjectsWrapperImg onClick={Costureria}>
            <Image
              src="/costureria.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ProjectsWrapperImg>
          {/* Text */}
          <ProjectsWrapperText>
            <h3>Costurería gloria</h3>
            {ChangeText ? (
              <p>
                This one is special :P <br /> <br /> I decided to do this
                landing page for <br /> my litle mom's business, where i share
                <br />
                and explain types of works my mom <br /> does as a seamstress,
                also you can <br /> watch her work schedule and whatsapp <br />
                info so you can reach her
              </p>
            ) : (
              <p>
                This one is special (: <br /> <br /> I decided to do this
                landing page for my litle mom's <br /> business, where i share
                and explain types of works my <br /> mom does as a seamstress,
                also you can watch her <br /> work schedule and whatsapp info so
                you can reach her
              </p>
            )}

            <span> Next - Framer motion - Styled components</span>
            <a
              href="https://github.com/Diego-Mike/Costureria-Gloria"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </ProjectsWrapperText>
        </ProjectsWrapper>

        {/* Cryptocurrency API */}

        <ProjectsWrapper>
          {/* Image */}
          <ProjectsWrapperImg onClick={Crypto}>
            <Image
              src="/cryptocurrency.png"
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ProjectsWrapperImg>
          {/* Text */}
          <ProjectsWrapperText>
            <h3>Cryptocurrency app</h3>
            {ChangeText ? (
              <p>
                First time using TS and react ! <br /> <br />
                This is an app where you can watch <br /> top 100 most hot
                cyptocurrencies <br /> on the market, but also search for <br />{" "}
                an specific one and get a litle bit <br /> more data about it
              </p>
            ) : (
              <p>
                First time using TS and react ! <br /> <br />
                This is an app where you can watch top 100 most hot <br />
                cyptocurrencies on the market, but also search for <br /> an
                specific one and get a litle bit more data about it
              </p>
            )}

            <span>React - Redux thunk - Styled c - Framer m - TS </span>
            <a
              href="https://github.com/Diego-Mike/Cryptocurrency-App"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </ProjectsWrapperText>
        </ProjectsWrapper>

        {/* Daily App (personal project) */}

        <ProjectsWrapper>
          {/* Image */}
          {ChangeDiv ? (
            <ProjectsWrapperImg2 onClick={Daily}>
              <Image
                src="/daily.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ProjectsWrapperImg2>
          ) : (
            <ProjectsWrapperImg onClick={Daily}>
              <Image
                src="/daily.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ProjectsWrapperImg>
          )}

          {/* Text */}
          <ProjectsWrapperText>
            <h3>Daily App</h3>
            {ChangeText ? (
              <>
                <p>
                  Create an account, create your own <br /> room, then, you can
                  add taks to your <br /> day, and, by the end of it you can
                  <br /> check how many tasks you completed <br /> and add a
                  small comment, then you can <br /> get ready for next day !
                  <br /> <br />
                  The reason why i made this app, is because <br /> i organize
                  my day by tasks, and this one <br /> allows me to do that,
                  even though <br /> it's pretty simple, i use it proudly every{" "}
                  <br /> single day !
                </p>
                <span>
                  React - Redux thunk - Styled c - <br /> Express - Node -
                  MongoDB
                </span>
              </>
            ) : (
              <>
                <p>
                  Create an account, create your own room, then, you <br /> can
                  add taks to your day, and, by the end of it you can <br />{" "}
                  check how many tasks you completed and add a small <br />{" "}
                  comment, then you can get ready for next day !
                  <br /> <br />
                  The reason why i made this app, is because i organize my{" "}
                  <br />
                  day by tasks, and this one allows me to do that, even <br />
                  though it's pretty simple, i use it proudly every single day !
                </p>
                <span>
                  React - Redux thunk - Styled c - Express - <br /> Node -
                  MongoDB
                </span>
              </>
            )}

            <a onClick={DailyRepo}>Repository</a>
          </ProjectsWrapperText>
        </ProjectsWrapper>

        {/* Facebook clone */}
        <ProjectsWrapper>
          {/* Image */}
          {ChangeDiv ? (
            <ProjectsWrapperImg2 onClick={Facee}>
              <Image
                src="/facebook.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ProjectsWrapperImg2>
          ) : (
            <ProjectsWrapperImg onClick={Facee}>
              <Image
                src="/facebook.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ProjectsWrapperImg>
          )}

          {/* Text */}
          <ProjectsWrapperText>
            <h3>Facebook clone</h3>
            {ChangeText ? (
              <p>
                Facebook clone, why not ?
                <br />
                <br />
                Create your account, post publications, add <br /> friends,
                comment on publications <br /> and much more !
                <br />
                <br />
                This project so far has been the biggest i've <br /> ever done,
                here i put all knowledge i've <br /> accumulated in the last
                months about <br /> web development.
              </p>
            ) : (
              <p>
                Facebook clone, why not ?
                <br />
                <br />
                Create your account, post publications, add friends, <br />
                comment on publications and much more !
                <br />
                <br />
                This project so far has been the biggest i've ever <br /> done,
                here i put all knowledge i've accumulated <br /> in the last
                months about web development.
              </p>
            )}

            <span>
              Next - SWR hook - Styled c - <br /> Express - Node - MongoDB - TS
            </span>
            <a onClick={FaceeRepo}>Repository</a>
          </ProjectsWrapperText>
        </ProjectsWrapper>
      </ProjectsHero>
    </div>
  );
};

export default Projects;
