import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { NavbarHero, GithubIcon, NavbarLinks, Links } from "./NavbarStyled";

const Navbar = () => {
  const CutLink = useMediaQuery({ query: "(max-width: 380px)" });

  return (
    <div>
      <NavbarHero>
        {/* Github icon */}
        <GithubIcon
          href="https://github.com/Diego-Mike?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github.svg" alt="" layout="fill" objectFit="cover" />
        </GithubIcon>
        {/* Website links */}
        <NavbarLinks>
          {CutLink ? null : <Links href="#presentation">Presentation</Links>}
          <Links href="#skills">Skills</Links>
          <Links href="#projects">Projects</Links>
          <Links href="#contactme">Contact Me</Links>
        </NavbarLinks>
      </NavbarHero>
    </div>
  );
};

export default Navbar;
