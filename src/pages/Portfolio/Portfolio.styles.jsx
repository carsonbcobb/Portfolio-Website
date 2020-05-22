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
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(-5%);
	}
`;

export const HeaderPortfolio = styled.div`
	margin-bottom: auto;
	transform: translateY(-20%);

	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(0%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
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

	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 2.25em;
		color: white;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		font-size: 1.8rem;
	}
	@media (max-width: 375px) and (max-height: 667px) {
		font-size: 1.8rem;
	}
	@media (max-width: 375px) and (max-height: 812px) {
		font-size: 1.8rem;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 1.6rem;
	}
	@media (min-height: 1366px) and (max-width: 1024px) {
		transform: translateY(110%);
	}
`;

export const ProjectContainer = styled.ul`
	height: 100%;
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

	@media (max-width: 414px) and (max-height: 896px) {
		height: auto;
		width: auto;
		transform: translate(-2.5%, 0%);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	@media (max-width: 320px) and (max-height: 568px) {
		transform: translate(-5%, -10%);
	}
`;

export const Project = styled.li`
	font-family: "Lora", serif;
	color: black;
	font-size: 1.5em;
	border: 2px solid black;
	margin: 10%;
	border-radius: 3.33%;
	background: rgba(255, 255, 255, 0.5);

	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 1.25em;
		border-radius: 0%;
		margin: 5%;
		transform: translateY(-5%);
	}
	@media (max-width: 414px) and (max-height: 736px) {
		font-size: 1rem;
	}
	@media (max-width: 375px) and (max-height: 667px) {
		margin: 1%;
		font-size: 0.9rem;
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
`;
export const WebsiteImage = styled.img`
	width: 100%;
	height: auto;
	border: 1px solid black;
	transform: translateY(25%);
`;
