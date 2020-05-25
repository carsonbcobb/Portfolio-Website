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

	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 2em;
		transform: translateY(-40%);
	}
	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-35%);
	}
	@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.8rem;
		transform: translateY(-40%);
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.8rem;
		transform: translateY(-40%);
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.4rem;
		transform: translateY(-45%);
	}
	@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-30%);
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-30%);
	}
`;

export const ContactInfoContainer = styled.div`
	font-size: 1.6rem;
	transform: translateY(-40%);
	-webkit-transform: translateY(-35%);

	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-15%);
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-20%);
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.4rem;
		transform: translateY(15%);
		-webkit-transform: translateY(-10%);
	}
	@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-30%);
	}
	@media only screen and (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 2rem;
	}
`;

export const ContactInfo = styled.ul`
	display: flex;
	flex-direction: column;
	color: white;
	list-style: none;

	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(25%);
	}

	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-5%);
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-35%);
	}
`;

export const ContactItem = styled.li`
	font-size: 1.75rem;
	padding: 5px;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
	@media only screen and (min-width: 414px) and (max-width: 896px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.4em;
		padding: 10px;
		margin: 15px;
		transform: translateY(35%);
	}
	@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.8rem;
		transform: translateY(-5%);
	}
	@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 0.8em;
		padding: 3px;
		margin: 3px;
		transform: translateX(-5%);
	}
	@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.5rem;
	}
	@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3) {
		transform: translateY(-25%);
		font-size: 1.5rem;
		padding: 10px;
		margin: 10px;
	}
`;

export const ContactLink = styled.a`
	color: white;
	cursor: pointer;
	-webkit-margin-before: 0em;
	-webkit-margin-after: 0em;
`;
