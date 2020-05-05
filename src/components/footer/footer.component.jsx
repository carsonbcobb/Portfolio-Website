import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import {
  FooterContainer,
  InfoContainer,
  SocialLinkContainer,
  SocialLink,
  Logo,
} from "./footer.styles";

const copyright = "\u00A9";

const Footer = () => (
  <FooterContainer>
    <InfoContainer>
      <Logo src={require("../../assets/Logo.png")} alt="logo" />
      <span>
        Created by Carson Cobb {copyright} {new Date().getFullYear()}
      </span>
    </InfoContainer>
    <SocialLinkContainer>
      <SocialLink>
        <FaGithub />
        <br />
        Github
      </SocialLink>
      <SocialLink>
        <FaLinkedin />
        <br />
        LinkedIn
      </SocialLink>
      <SocialLink>
        <AiTwotoneMail />
        <br />
        Email
      </SocialLink>
    </SocialLinkContainer>
  </FooterContainer>
);

export default Footer;
