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
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		transform: translateY(100%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		transform: translateY(-90%);
	}
`;

export const Name = styled.h1`
	font-size: 7em;
	font-weight: 500;
	color: white;
	animation: ${fadeIn} 4s;
	animation-delay: 2s;
	animation-fill-mode: forwards;
	opacity: 0;
	padding: 0;
	margin-top: 0;
	margin-bottom: 0;

	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		font-size: 4em;
		transform: translateY(180%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		font-size: 5em;
		transform: translateY(60%);
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		margin-bottom: 10%;
		transform: translateY(0%);
	}
`;

export const Title = styled.span`
	font-size: 4em;
	color: white;
	animation: ${fadeIn} 4s;
	animation-delay: 2.5s;
	animation-fill-mode: forwards;
	opacity: 0;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		font-size: 2em;
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

	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		width: 100%;
		padding: 15%;
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		width: 90%;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
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
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		width: 45%;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
		width: 25%;
	}
`;
