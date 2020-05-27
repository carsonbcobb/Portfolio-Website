import styled from "styled-components";

export const ContactPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 70vh;
`;

export const ContactHeader = styled.div`
	font-size: 2.5em;
	color: black;
	margin-bottom: auto;
	transform: translateY(-65%);

	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3)  {
		font-size: 1.5rem;
		transform: translateY(-45%);
	}

	@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){		
		transform: translateY(-35%);
	}

	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 1.8rem;
		transform: translateY(-45%);
	}

	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		font-size: 1.8rem;
		transform: translateY(-45%);
	}
	@media only screen 
	and (max-width: 320px) 
	and (max-height: 568px) 
	and (-webkit-device-pixel-ratio: 2){
		font-size: 1.4rem;
		transform: translateY(-45%);
	}

	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2){
		transform: translateY(-40%);
		font-size: 1.8rem;
	}

	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 3rem;
		transform: translateY(-35%);
	}
	

`;

export const ContactInfoContainer = styled.div`
	font-size: 1.6rem;
	transform: translateY(-40%);
	-webkit-transform: translateY(-35%);

	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3)  {
		transform: translateY(-35%);
	}

	@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){
		transform: translateY(-15%);
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		transform: translate(-5%, -20%);
			}
	@media only screen 
and (min-width: 320px) 
and (max-height: 568px) 
and (-webkit-device-pixel-ratio: 2){
		font-size: 1.4rem;
		transform: translate(-5%, -20%);
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2){
		transform: translateY(-30%);
	}
	
	

`;

export const ContactInfo = styled.ul`
	display: flex;
	flex-direction: column;
	color: white;
	list-style: none;

	

	@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){	
			transform: translateY(-5%);
	}

	
`;

export const ContactItem = styled.li`
	font-size: 2rem;
	padding: 10px;
	text-align: center;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 3)  {
		font-size: 1.5rem;
		padding: 10px;
		margin: 15px;
	}
	@media only screen 
    and (max-width : 414px) 
    and (max-height : 736px) 
    and (-webkit-device-pixel-ratio : 3){
		font-size: 1.8rem;
		transform: translate(-5%, 25%);
	}
	
	
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3){		
		font-size: 1.5rem;
	}
	@media only screen 
    and (max-width : 375px) 
    and (max-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) {
		transform: translateY(-25%);
		font-size: 1.5rem;
		padding: 10px;
		margin: 10px;
	}
	@media only screen and (max-height: 768px) and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2){
		font-size: 2rem;
		padding: 10px;
		margin: 10px;
		transform: translate(-5%, 35%);

	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 3rem;
		transform: translateY(20%);
	}
`;

export const ContactLink = styled.a`
	color: white;
	cursor: pointer;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	
`;
