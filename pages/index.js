import Head from "next/head";

import Introduction from "../Components/Introduction/Introduction";
import Navbar from "../Components/Navbar/Navbar";
import Presentation from "../Components/Presentation/Presentation";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/ContactMe/Contact";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Diego Cifuentes | Full stack junior developer</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Introduction */}
      <Introduction />

      {/* Presentation */}
      <Presentation />

      {/* Technologies i've used */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact Me */}
      <Contact />
    </div>
  );
};

export default Home;
