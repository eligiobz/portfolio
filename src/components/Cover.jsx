import React from "react";
import Logo from "./Logo";
import { Logos } from "./../portfolioData";

function Cover(props) {
  return (
    <div>
      <Logo logo={Logos[Math.floor(Math.random() * 10) % Logos.length]} />
    </div>
  );
}

export default Cover;
