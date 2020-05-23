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

	@media (max-width: 414px) and (min-height: 896px) {
		font-size: 2em;
		transform: translateY(-40%);
	}
	@media (max-width: 375px) and (min-height: 812px) {
		transform: translateY(-35%);
	}
	@media (max-width: 414px) and (min-height: 736px) {
		font-size: 1.8rem;
		transform: translateY(-40%);
	}
	@media (max-width: 375px) and (min-height: 667px) {
		font-size: 1.8rem;
		transform: translateY(-40%);
	}
	@media (max-width: 320px) and (min-height: 568px) {
		font-size: 1.4rem;
		transform: translateY(-45%);
	}
	@media (max-width: 768px) and (min-height: 1024px) {
		transform: translateY(-30%);
	}
	@media (max-width: 1024px) and (min-height: 1366px) {
		transform: translateY(-30%);
	}
`;

export const ContactInfoContainer = styled.div`
	font-size: 1.6rem;
	transform: translateY(-40%);

	@media (max-width: 375px) and (min-height: 812px) {
		transform: translateY(-15%);
	}
	@media (max-width: 375px) and (min-height: 667px) {
		transform: translateY(-20%);
	}
	@media (max-width: 320px) and (min-height: 568px) {
		font-size: 1.8rem;
		transform: translateY(0%);
	}
	@media (max-width: 768px) and (min-height: 1024px) {
		transform: translateY(-30%);
	}
	@media (max-width: 1024px) and (min-height: 1366px) {
		font-size: 2rem;
	}
`;

export const ContactInfo = styled.ul`
	display: flex;
	flex-direction: column;
	color: white;
	list-style: none;

	@media (max-width: 414px) and (min-height: 896px) {
		transform: translateY(25%);
	}
	@media (max-width: 375px) and (min-height: 812px) {
		transform: translateY(-5%);
	}
	@media (max-width: 320px) and (min-height: 568px) {
		transform: translateY(-35%);
	}
`;

export const ContactItem = styled.li`
	font-size: 1.75em;
	padding: 5px;
	@media (max-width: 414px) and (min-height: 896px) {
		font-size: 1.4em;
		padding: 10px;
		margin: 15px;
		transform: translateY(35%);
	}
	@media (max-width: 414px) and (min-height: 736px) {
		font-size: 1.8rem;
		transform: translateY(-5%);
	}
	@media (max-width: 320px) and (min-height: 568px) {
		font-size: 0.8em;
		padding: 3px;
		margin: 3px;
		transform: translateX(-5%);
	}
	@media (max-width: 375px) and (min-height: 812px) {
		font-size: 1.5rem;
	}
	@media (max-width: 375px) and (min-height: 667px) {
		transform: translateY(-25%);
		font-size: 1.5rem;
		padding: 10px;
		margin: 10px;
	}
`;

export const ContactLink = styled.a`
	color: white;
	cursor: pointer;
`;
