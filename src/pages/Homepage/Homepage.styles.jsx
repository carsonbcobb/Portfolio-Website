import styled, { keyframes } from "styled-components";

// Animation

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;
export const HomePageContainer = styled.div`
	font-family: "Dancing Script", cursive;
	display: flex;
	flex-direction: column;
	height: 70vh;
	justify-content: center;
`;

export const NameContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-100%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-90%);
	}
`;

export const Name = styled.h1`
	font-size: 7rem;
	font-weight: 500;
	color: white;
	animation: ${fadeIn} 4s;
	animation-delay: 2s;
	animation-fill-mode: forwards;
	opacity: 0;
	padding: 0;
	margin-top: 0;
	margin-bottom: 0;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 4rem;
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 4rem;
		-webkit-transform: translateY(55%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 5em;
		transform: translateY(60%);
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		margin-bottom: 10%;
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(50%);
	}
`;

export const Title = styled.span`
	font-size: 4em;
	color: white;
	animation: ${fadeIn} 4s;
	animation-delay: 2.5s;
	animation-fill-mode: forwards;
	opacity: 0;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 2rem;
		color: white;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	height: auto;
	width: 40%;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	-webkit-logical-width: 40%;
	-webkit-logical-height: 30%;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		width: 100%;
		padding: 15%;
		-webkit-logical-width: 100%;
		-webkit-logical-height: 30%;
		-webkit-padding-after: 0;
		-webkit-padding-before: 0;
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		width: 90%;
	}
	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		width: 100%;
	}
`;

export const Logo = styled.img`
	margin-top: auto;
	margin-bottom: auto;
	animation: ${fadeIn} 7s;
	animation-delay: 2.5s;
	animation-fill-mode: forwards;
	opacity: 0;
	height: auto;
	width: 20%;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		width: 45%;
	}
	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		width: 25%;
	}
`;
