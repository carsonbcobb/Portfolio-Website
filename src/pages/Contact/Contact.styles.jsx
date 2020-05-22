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

	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 2em;
		transform: translateY(-40%);
	}
	@media (max-width: 375px) and (max-height: 812px) {
		transform: translateY(-35%);
	}
	@media (max-width: 375px) and (max-height: 667px) {
		font-size: 1.8rem;
		transform: translateY(-40%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 1.4rem;
		transform: translateY(-45%);
	}
	@media (min-height: 1024px) {
		font-size: 3em;
	}
	@media (min-height: 1366px) and (max-width: 1024px) {
		transform: translateY(-30%);
	}
`;

export const ContactInfoContainer = styled.div`
	font-size: 1.6em;
	transform: translateY(-40%);

	@media (max-width: 375px) and (max-height: 812px) {
		font-size: 2rem;
		transform: translateY(-15%);
	}
	@media (max-width: 375px) and (max-height: 667px) {
		font-size: 1.5rem;
		transform: translateY(-20%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 1.3rem;
		transform: translateY(-20%);
	}
`;

export const ContactInfo = styled.ul`
	display: flex;
	flex-direction: column;
	color: white;
	list-style: none;

	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(15%);
	}
	@media (max-width: 375px) and (max-height: 812px) {
		transform: translateY(-15%);
	}
`;

export const ContactItem = styled.li`
	font-size: 1.75em;
	padding: 5px;
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 1.4em;
		padding: 10px;
		margin: 15px;
		transform: translateY(35%);
	}
	@media (max-width: 414px) and (max-height: 736px) {
		font-size: 1.8rem;
		transform: translateY(-5%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 0.8em;
		padding: 3px;
		margin: 3px;
		transform: translateX(-5%);
	}
	@media (max-width: 375px) and (max-height: 812px) {
		font-size: 1em;
		padding: 10px;
		margin: 10px;
	}
	@media (max-width: 375px) and (max-height: 667px) {
		transform: translateY(35%);
	}
`;

export const ContactLink = styled.a`
	color: white;
	cursor: pointer;
`;
