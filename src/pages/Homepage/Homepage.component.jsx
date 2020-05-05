import React from "react";

import {
  HomePageContainer,
  NameContainer,
  Title,
  TitleContainer,
  Name,
  LogoContainer,
  Logo,
} from "./Homepage.styles";

import VideoBackground from "../../components/video-background/videoBackground.component";

const logoSource = require("../../assets/Logo.png");

const HomePage = () => (
  <HomePageContainer>
    <VideoBackground />
    <NameContainer>
      <Name>Carson Cobb</Name>
    </NameContainer>
    <LogoContainer>
      <Logo src={logoSource} />
    </LogoContainer>
    <TitleContainer>
      <Title>Web developer</Title>
    </TitleContainer>
  </HomePageContainer>
);

export default HomePage;
