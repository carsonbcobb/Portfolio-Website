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
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		transform: translateY(-50%);
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		transform: translateY(-20%);

	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2){
		transform: translateY(-25%);
	}
	@media only screen 
and (max-width: 320px) 
and (max-height: 568px) 
and (-webkit-device-pixel-ratio: 2){
		transform: translateY(-25%);
	}
		@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(-90%);
	}
	
	@media only screen and (max-height: 1024px) and (min-width: 1366px) and (-webkit-device-pixel-ratio: 2){
		transform: translateY(-25%);
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
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		font-size: 4rem;
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 4rem;
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2){
		font-size: 4rem !important;
	}
	
	
		@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 5em;
		transform: translateY(50%);
	}
	@media only screen and (max-height: 768px) and (min-width: 1366px) and (-webkit-device-pixel-ratio: 2){
		transform: translateY(-25%);
	}
	@media only screen and (max-height: 600px) and (max-width: 800px) and (-webkit-device-pixel-ratio: 2){
		font-size: 4rem;
		transform: translateY(-25%);
	}

	

`;

export const TitleContainer = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
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
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		font-size: 2rem;
		color: white;
		transform: translateY(40%);
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 2rem;
		transform: translateY(40%);

	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2){
		font-size: 2rem !important;
		transform: translateY(40%);
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2){
		font-size: 3rem !important;
		transform: translateY(40%);

	}
	@media only screen and (max-height: 1024px) and (min-width: 1366px) and (-webkit-device-pixel-ratio: 2){
		font-size: 4rem;
		transform: translateY(45%);
	}
	@media only screen and (max-height: 600px) and (max-width: 800px) and (-webkit-device-pixel-ratio: 2){
		font-size: 2rem;
		transform: translateY(45%);
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
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		width: 100%;
		padding: 15%;
		-webkit-logical-width: 100%;
		-webkit-logical-height: 30%;
		-webkit-padding-after: 0;
		-webkit-padding-before: 0;
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		width: 100%;
		padding: 15%;
		-webkit-logical-width: 100%;
		-webkit-logical-height: 30%;
		-webkit-padding-after: 0;
		-webkit-padding-before: 0;

	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2){
		width: 100%;
		-webkit-logical-width: 100%;
		-webkit-logical-height: 30%;
		-webkit-padding-after: 0;
		-webkit-padding-before: 0;
	}
	
		@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		width: 50%;
	}
	
	@media only screen and (max-height: 1024px) and (min-width: 1366px) and (-webkit-device-pixel-ratio: 2) {
		width: 50%;
	}
	@media only screen and (max-height: 600px) and (max-width: 800px) and (-webkit-device-pixel-ratio: 2){
		width: 50%;
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
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		width: 45%;
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		width: 45%;
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2){
		width: 30%;
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
	
	width: 35%;
	
	}
	@media only screen and (max-height: 600px) and (max-width: 800px) and (-webkit-device-pixel-ratio: 2){
		width: 35%;
	}
	
	@media only screen and (max-height: 1024px) and (min-width: 1366px) and (-webkit-device-pixel-ratio: 2) {
		width: 35%;
	}
`;
