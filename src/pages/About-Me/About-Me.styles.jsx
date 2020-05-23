import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 70vh;
`;

export const HeaderAbout = styled.div`
	margin-bottom: auto;
	transform: translateY(-40%);
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
		transform: translateY(-10%);
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
		transform: translateY(10%);
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
		transform: translateY(10%);
	}

	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
		transform: translateY(-10%);
	}
`;

export const HeaderTitle = styled.h1`
	font-size: 6em;
	color: white;
	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		font-size: 5em;
		transform: translateY(80%);
	}
	@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
		font-size: 4rem;
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
		font-size: 4rem;
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
		font-size: 4rem;
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
		font-size: 4rem;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		font-size: 8em;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
		font-size: 8em;
	}
`;

export const BodyAbout = styled.div`
	font-family: "Lora", serif;
	margin: auto;
	width: 40%;
	font-size: 1.5rem;
	transform: translateY(-25%);

	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		width: 95%;
		font-size: 1.2rem;
		transform: translateY(-15%);
	}
	@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
		font-size: 1rem;
		width: 90%;
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
		font-size: 1rem;
		width: 90%;
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
		font-size: 1rem;
		width: 90%;
		transform: translateY(-25%);
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
		font-size: 0.9rem;
		width: 90%;
		transform: translateY(-5%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		font-size: 1.4rem;
		width: 90%;
		transform: translateY(-15%);
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
		font-size: 1.2rem;
		width: 90%;
		transform: translateY(-5%);
	}
`;

export const Body = styled.p`
	color: white;
	transform: translateY(-15%);

	@media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: portrait) {
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) {
		transform: translateY(0%);
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
		transform: translateY(-10%);
	}
	@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
		transform: translateY(10%);
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
		font-size: 1.2em;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
		font-size: 2em;
	}
`;
