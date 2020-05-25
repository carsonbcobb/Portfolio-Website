import styled, { keyframes } from "styled-components";

//Animation

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const PortfolioPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 70vh;
`;

export const HeaderPortfolio = styled.div`
	margin-bottom: auto;
	transform: translateY(-20%);
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;

	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-20%);
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-15%);
	}
`;

export const HeaderTitlePortfolio = styled.h1`
	font-size: 4.5rem;
	color: white;
	background: rgba(0, 0, 0, 0.9);
	padding: 20px;
	animation: ${fadeIn} 2.5s;
	animation-delay: 0.75s;
	animation-fill-mode: forwards;
	opacity: 0;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;

	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 2.25em;
		color: white;
	}
	@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.8rem;
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.6rem;
	}
	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.8rem;
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.6rem;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(110%);
	}
`;

export const ProjectContainer = styled.ul`
	height: 50%;
	width: 100%;
	list-style: none;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 1fr 1fr;
	opacity: 0;
	animation: ${fadeIn} 2.5s;
	animation-delay: 1s;
	animation-fill-mode: forwards;
	transform: translateY(-30%);
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	-webkit-transform: translateY(15%);

	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}
	@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translate(-2.5%, -10%);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translate(-5%, -15%);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		transform: translate(-5%, -10%);
	}
	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		transform: translate(-5%, 0%);
	}

	@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		height: 70%;
		transform: translate(0%, 0%);
		-webkit-transform: translate(0%, 0%);
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		height: 50%;
		transform: translate(0%, -20%);
	}
`;

export const Project = styled.li`
	font-family: "Lora", serif;
	color: black;
	font-size: 1.5rem;
	border: 2px solid black;
	margin: 10%;
	border-radius: 3.33%;
	background: rgba(255, 255, 255, 0.5);
	text-align: center;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1rem;
		border-radius: 3.33%;
		margin: 5%;
	}
	@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 0.9rem;
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		margin: 1%;
		font-size: 0.7rem;
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 0.6rem;
	}
`;

export const LiveButton = styled.button`
	border: 1px solid rgba(155, 155, 155, 0.9);
	background: rgba(255, 255, 255, 0.8);
	font-size: 0.8em;
	color: black;
	padding: 5%;
	margin: 5%;
	border-radius: 10%;
	cursor: pointer;
	transition: 0.5s ease-in-out;

	&:hover {
		background: rgba(155, 155, 155, 0.9);
		color: white;
	}
`;

export const CodeButton = styled.button`
	border: 1px solid rgba(50, 50, 50, 0.9);
	background: rgba(0, 0, 0, 0.7);
	color: white;
	font-size: 0.8em;
	border-radius: 10%;
	padding: 5%;
	margin: 5%;
	cursor: pointer;
	transition: 0.5s ease-in-out;

	&:hover {
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.6);
		color: black;
	}
`;

export const ButtonContainer = styled.div`
	display: block;
`;

export const WebsiteImageContainer = styled.div`
	width: 80%;
	height: auto;
	margin: auto;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
`;
export const WebsiteImage = styled.img`
	width: 100%;
	height: auto;
	border: 1px solid black;
	transform: translateY(25%);
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
`;
