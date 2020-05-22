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
	@media (min-height: 1024px) and (max-width: 768px) {
		transform: translateY(0%);
	}
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(0%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		transform: translateY(-10%);
	}
`;

export const HeaderTitle = styled.h1`
	font-size: 6em;
	color: white;
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 5em;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 4rem;
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		font-size: 8em;
	}
`;

export const BodyAbout = styled.div`
	font-family: "Lora", serif;
	margin: auto;
	width: 40%;
	font-size: 1.5rem;
	transform: translateY(-25%);

	@media (max-width: 414px) and (max-height: 896px) {
		width: 95%;
		font-size: 1.2rem;
		transform: translateY(-15%);
	}
	@media (max-width: 375px) and (max-height: 667px) {
		font-size: 1em;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 0.9rem;
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		width: 75%;
		transform: translateY(15%);
		font-size: 4em;
	}
	@media (min-height: 1360px) and (max-width: 1024px) {
		width: 100%;
		font-size: 1.2em;
		transform: translateY(-15%);
	}
`;

export const Body = styled.p`
	color: white;
	transform: translateY(-15%);

	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(0%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		transform: translateY(-10%);
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		font-size: 1.2em;
	}
	@media (min-height: 1366px) and (max-width: 1024px) {
		font-size: 2em;
	}
`;
