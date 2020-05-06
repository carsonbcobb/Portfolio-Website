import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  OptionsLinkContainer,
  OptionsLink,
  Name,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo src={require("../../assets/Logo.png")} alt="logo" />
      <Name>Carson Cobb</Name>
    </LogoContainer>

    <OptionsLinkContainer>
      <OptionsLink to="/">Home</OptionsLink>
      <OptionsLink to="/Portfolio">Portfolio</OptionsLink>
      <OptionsLink to="/Contact">Contact</OptionsLink>
      <OptionsLink to="/AboutMe">About Me</OptionsLink>
    </OptionsLinkContainer>
  </HeaderContainer>
);

export default Header;
