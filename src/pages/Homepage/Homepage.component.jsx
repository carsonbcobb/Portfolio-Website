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

const HomePage = () => (
	<HomePageContainer>
		<BackgroundVideo
			loop={false}
			src={"https://i.imgur.com/KSE1CWw.mp4"}
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
