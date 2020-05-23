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

import BackgroundVideo from "react-background-video-player";

const logoSource = require("../../assets/Logo.png");
const homeBackground = require("../../assets/background-home.mp4");

const HomePage = () => (
	<HomePageContainer>
		<BackgroundVideo
			loop={false}
			src={homeBackground}
			style={{ zIndex: "-100" }}
		/>
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
