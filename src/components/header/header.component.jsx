import React from "react";

import { Logo } from "../../assets/Logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsLinkContainer,
  OptionsLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <img src={Logo} alt="logo" />
      <span>Carson Cobb</span>
    </LogoContainer>
    <OptionsLinkContainer>
      <OptionsLink to="/">Home</OptionsLink>
      <OptionsLink to="/portfolio">Portfolio</OptionsLink>
      <OptionsLink to="/contact">Contact</OptionsLink>
      <OptionsLink to="/about">About Me</OptionsLink>
    </OptionsLinkContainer>
  </HeaderContainer>
);

export default Header;
