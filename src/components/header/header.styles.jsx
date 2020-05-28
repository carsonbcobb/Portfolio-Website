import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 10vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 15%;
	margin-left: 10px;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
`;

export const Logo = styled.img`
	height: auto;
	width: 15%;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media (max-width: 414px) and (max-height: 896px) {
		width: 50%;
	}
`;

export const Name = styled.span`
	color: black;
	font-size: 2em;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 25px;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;

	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 1.5em;
		margin-left: 10px;
	}
	@media only screen and (max-height: 600px) and (min-width: 800px) and (-webkit-device-pixel-ratio: 2){
		font-size: 1.5rem;
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 3rem;
	}
`;
