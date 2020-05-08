import React from "react";

import { OptionsLinkContainer, OptionsLink } from "./headerRight.styles";
const HeaderRight = ({ open, handleClick }) => {
  return (
    <OptionsLinkContainer open={open}>
      <OptionsLink to="/" onClick={handleClick}>
        Home
      </OptionsLink>
      <OptionsLink to="/Portfolio" onClick={handleClick}>
        Portfolio
      </OptionsLink>
      <OptionsLink to="/Contact" onClick={handleClick}>
        Contact
      </OptionsLink>
      <OptionsLink to="/AboutMe" onClick={handleClick}>
        About Me
      </OptionsLink>
    </OptionsLinkContainer>
  );
};

export default HeaderRight;
