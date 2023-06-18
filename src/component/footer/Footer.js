import React from "react";
import Getsocial from "../getsocial/Getsocial";
import footercss from "../footer/footer.css"

const Footer = () => {
  return (
    <>
      <footer className="w3-container w3-blue-grey w3-center w3-margin-top footer-section" style={{ paddingBottom: "40px" }}>
        <Getsocial />
      </footer>
    </>
  );
};

export default Footer;
