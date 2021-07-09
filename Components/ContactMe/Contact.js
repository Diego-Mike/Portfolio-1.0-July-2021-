import { useState } from "react";

import { ContactHero, ContactData } from "./ContactStyled";

const Contact = () => {
  const [IsVisible, setIsVisible] = useState(false);

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div id="contactme">
      <ContactHero>
        <h2>
          Do you want to do business/hire me ? <br />
          <span onClick={() => setIsVisible(true)}> Contact me </span>
        </h2>
        {IsVisible && (
          <ContactData variants={PopUp} initial="hidden" animate="visible">
            <span>diego.cifuentes.dev@gmail.com</span>
            <span> Phone : 350 4995513 </span>
          </ContactData>
        )}
      </ContactHero>
    </div>
  );
};

export default Contact;
