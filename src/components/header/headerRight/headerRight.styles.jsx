import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsLinkContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media (max-width: 414px) and (max-height: 896px) {
		flex-flow: column nowrap;
		background-color: #ff7878;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		padding-top: 8em;
		justify-content: flex-start;
		transition: transform 0.3s ease-in-out;
		z-index: 15;
	}
`;

export const OptionsLink = styled(Link)`
	font-size: 2em;
	padding: 10px 15px;
	cursor: pointer;
	color: black;
	transition: 1s ease;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;

	&:hover {
		transform: translateY(-15%);
		color: #3574b2;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 4.5em;
		padding: 1.5rem 1.5rem;
		color: white;

		&:hover {
			transform: translateY(0%);
			color: white;
		}
	}
	@media (max-width: 375px) and (max-height: 667px) {
		transform: translateY(-35%);
		&:hover {
			transform: translateY(-35%);
			color: white;
		}	
		}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 3rem;
	}
	@media only screen and (max-height: 600px) and (min-width: 800px) and (-webkit-device-pixel-ratio: 2){
		font-size: 1.5rem;
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 3rem;
	}
`;
