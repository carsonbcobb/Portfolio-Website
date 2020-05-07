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
  ContactLink2,
} from "./Contact.styles";

import VideoBackgroundContact from "../../components/video-background/video-background-contact.component";

const ContactPage = () => (
  <ContactPageContainer>
    <VideoBackgroundContact />
    <ContactHeader>
      <h1>Contact Me!</h1>
      <span></span>
    </ContactHeader>
    <ContactInfoContainer>
      <ContactInfo>
        <ContactItem>
          <ContactLink2 href="mailto: carson@carson-cobb.com">
            <AiTwotoneMail />
            Email: <br /> carson@carson-cobb.com
          </ContactLink2>
        </ContactItem>
        <ContactItem>
          <ContactLink href="https://github.com/carsonbcobb" target="_blank">
            <FaGithub />
            Github:
            <br /> carsonbcobb
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink2
            href="https://www.linkedin.com/in/carsoncobb"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn:
            <br /> carsoncobb
          </ContactLink2>
        </ContactItem>
      </ContactInfo>
    </ContactInfoContainer>
  </ContactPageContainer>
);

export default ContactPage;
