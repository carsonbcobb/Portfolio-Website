import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 70vh;
`;

export const HeaderAbout = styled.div`
	margin-top: 2%;
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(0%);
	}
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3)  {
		transform: translateY(-10%);
	}
	
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		transform: translateY(0%);
	}
	@media only screen 
and (device-width: 320px) 
and (device-height: 568px) 
and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(-10%);
	}
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){		
		transform: translateY(10%);
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		transform: translateY(10%);
	}
`;

export const HeaderTitle = styled.h1`
	font-size: 6em;
	color: white;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;

	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		font-size: 5em;
	}
	
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 4rem;
	}
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){		font-size: 4rem;
	}
	
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		font-size: 4rem;
	}
	@media only screen 
and (max-width: 320px) 
and (max-height: 568px) 
and (-webkit-device-pixel-ratio: 2) {
		font-size: 4rem;
	}

	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 8em;
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 9rem;
	}
`;

export const BodyAbout = styled.div`
	font-family: "Lora", serif;
	margin: auto;
	width: 40%;
	font-size: 1.3rem;
	transform: translateY(15%);
	-webkit-logical-width: 40%;
	-webkit-logical-height: 100%;
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3) {
		width: 90%;
		font-size: 1.2rem;
		transform: translateY(-20%);
	}
	
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 1.2rem;
		width: 90%;
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		font-size: 1rem;
		width: 90%;
	}
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){		
		font-size: 1rem;
		width: 90%;
		transform: translateY(-25%);
	}
	@media only screen 
and (max-width: 320px) 
and (max-height: 568px) 
and (-webkit-device-pixel-ratio: 2){		
	font-size: 0.9rem;
		width: 90%;
		transform: translateY(15%);
		text-align: center;
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
		width: 50%;
		transform: translateY(15%);
	}

	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 1.8rem;
		transform: translateY(25%);
	}
	

`;

export const Body = styled.p`
	color: white;
	transform: translateY(-15%);
	text-align: center;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3)  {
		transform: translateY(25%);
	}
	
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		transform: translateY(0%);
	}
	@media only screen 
and (device-width: 320px) 
and (device-height: 568px) 
and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(0%);
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		transform: translateY(-10%);
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1.2rem;
	}

`;
