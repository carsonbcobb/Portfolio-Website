import React from "react";

import {
  FooterContainer,
  InfoContainer,
  SocialLinkContainer,
  SocialLink,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <InfoContainer>
      <span>Created by Carson Cobb</span>
    </InfoContainer>
    <SocialLinkContainer>
      <SocialLink>Github</SocialLink>
      <SocialLink>LinkedIn</SocialLink>
      <SocialLink>Email</SocialLink>
    </SocialLinkContainer>
  </FooterContainer>
);

export default Footer;
