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
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(80%);
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

	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 4em;
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		font-size: 5em;
		transform: translateY(60%);
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 414px) and (max-height: 896px) {
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
	@media (max-width: 414px) and (max-height: 896px) {
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

	@media (max-width: 414px) and (max-height: 896px) {
		width: 100%;
		padding: 15%;
		@media (max-width: 800px) {
			transform: translateY(10%);
		}
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		width: 90%;
	}
	@media (min-height: 1366px) and (max-width: 1024px) {
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
	@media (max-width: 414px) and (max-height: 896px) {
		width: 45%;
	}
	@media (min-height: 1366px) and (max-width: 1024px) {
		width: 25%;
	}
`;
