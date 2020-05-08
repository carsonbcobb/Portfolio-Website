import React from "react";

import { HeaderContainer, LogoContainer, Logo, Name } from "./header.styles";

import HeaderBurger from "./headerBurger/headerBurger.component";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo src={require("../../assets/Logo.png")} alt="logo" />
        <Name>Carson Cobb</Name>
      </LogoContainer>
      <HeaderBurger />
    </HeaderContainer>
  );
}

export default Header;
