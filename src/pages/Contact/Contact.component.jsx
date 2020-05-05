import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

import {
  ContactPageContainer,
  ContactInfoContainer,
  ContactInfo,
  ContactHeader,
  ContactItem,
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
          <AiTwotoneMail />
          Email: <br /> carson-cobb@carson-cobb.com
        </ContactItem>
        <ContactItem>
          <FaGithub />
          Github:
          <br /> Carson-cobb
        </ContactItem>
        <ContactItem>
          <FaLinkedin /> LinkedIn:
          <br /> webaddress
        </ContactItem>
      </ContactInfo>
    </ContactInfoContainer>
  </ContactPageContainer>
);

export default ContactPage;
