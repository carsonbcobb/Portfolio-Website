import React from "react";

import {
  AboutMeContainer,
  HeaderAbout,
  HeaderTitle,
  Body,
  BodyAbout,
} from "./About-Me.styles";

import VideoBackgroundAbout from "../../components/video-background/video-background-about.component";

const AboutMePage = () => (
  <AboutMeContainer>
    <VideoBackgroundAbout />
    <HeaderAbout>
      <HeaderTitle>About Me</HeaderTitle>
    </HeaderAbout>
    <BodyAbout>
      <Body>
        My name is Carson Cobb. I am from Fresno, CA and currently working as a
        Front-End Web Developer/Open Souce Contributor. I have experience with
        HTML, CSS, SCSS, Bootstrap, Javascript, and React. I am constantly
        learning new coding languages and expanding my horizons. I am
        self-taught but have also taken courses from Zero to Mastery, Academind,
        and others. When it comes to code, I strive for a pixel perfect design
        and implementation every time. Go check out my LinkedIn and Github for
        more!
      </Body>
    </BodyAbout>
  </AboutMeContainer>
);

export default AboutMePage;
