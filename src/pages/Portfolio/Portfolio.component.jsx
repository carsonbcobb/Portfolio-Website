import React from "react";

import {
  PortfolioPageContainer,
  HeaderPortfolio,
  HeaderTitlePortfolio,
  ProjectContainer,
  Project,
  LiveButton,
  CodeButton,
  ButtonContainer,
  WebsiteImageContainer,
  WebsiteImage,
} from "./Portfolio.styles";
import VideoBackgroundPortfolio from "../../components/video-background/video-background-portfolio.component";

const crownClothing = require("../../assets/portfolio/crown-clothing.png");
const carsonWebsite = require("../../assets/portfolio/carson-cobb-website.png");

const PortfolioPage = () => (
  <PortfolioPageContainer>
    <VideoBackgroundPortfolio />
    <HeaderPortfolio>
      <HeaderTitlePortfolio>
        Take a look at some of my work!
      </HeaderTitlePortfolio>
    </HeaderPortfolio>
    <ProjectContainer>
      <Project>
        Crown Clothing
        <br />
        <WebsiteImageContainer>
          <WebsiteImage src={crownClothing} />
        </WebsiteImageContainer>
        <br />
        <ButtonContainer>
          <a
            href="https://crown-clothing-company.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiveButton>View Live</LiveButton>
          </a>
          <a
            href="https://github.com/carsonbcobb/Crown-Clothing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeButton>View Code</CodeButton>
          </a>
        </ButtonContainer>
      </Project>
      <Project>
        Portfolio Website
        <br />
        <WebsiteImageContainer>
          <WebsiteImage src={carsonWebsite} />
        </WebsiteImageContainer>
        <br />
        <ButtonContainer>
          <LiveButton
            onClick={() =>
              alert("You are currently viewing this website live!")
            }
          >
            View Live
          </LiveButton>
          <a
            href="https://github.com/carsonbcobb/Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeButton>View Code</CodeButton>
          </a>
        </ButtonContainer>
      </Project>
      <Project>
        Clovis Community Choir
        <br />
        <WebsiteImageContainer>
          <WebsiteImage />
        </WebsiteImageContainer>
        <br />
        <ButtonContainer>
          <LiveButton>View Live</LiveButton>
          <CodeButton>View Code</CodeButton>
        </ButtonContainer>
      </Project>
    </ProjectContainer>
  </PortfolioPageContainer>
);

export default PortfolioPage;
