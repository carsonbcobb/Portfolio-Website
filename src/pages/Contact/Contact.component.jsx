import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

import {
  ContactPageContainer,
  ContactInfoContainer,
  ContactInfo,
  ContactHeader,
  ContactItem,
  ContactLink,
} from "./Contact.styles";

import BackgroundVideo from "react-background-video-player";

const videoSource = require("../../assets/video-background-contact.mp4");

const ContactPage = () => (
  <ContactPageContainer>
    <BackgroundVideo
      loop={false}
      src={videoSource}
      style={{ zIndex: "-100" }}
    />
    <ContactHeader>
      <h1>Contact Me!</h1>
      <span></span>
    </ContactHeader>
    <ContactInfoContainer>
      <ContactInfo>
        <ContactItem>
          <ContactLink href="mailto: carson@carson-cobb.com">
            <AiTwotoneMail />
            Email: <br /> carson@carson-cobb.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink href="https://github.com/carsonbcobb" target="_blank">
            <FaGithub />
            Github:
            <br /> carsonbcobb
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink
            href="https://www.linkedin.com/in/carsoncobb"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn:
            <br /> carsoncobb
          </ContactLink>
        </ContactItem>
      </ContactInfo>
    </ContactInfoContainer>
  </ContactPageContainer>
);

export default ContactPage;
