// src/components/Login.jsx
import React from "react";
import fac_logo from "../../assets/fac_logo.png";
import uni_logo from "../../assets/uni_logo.png";

const Header = () => {
  return (
    <header className="flex flex-row justify-between">
      <img src={fac_logo} alt="fac_logo" className="w-36 h-36" />
      <img src={uni_logo} alt="uni_logo" className="h-36" />
    </header>
  );
};

export default Header;
