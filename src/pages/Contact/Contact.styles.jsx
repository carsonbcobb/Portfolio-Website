import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const ContactHeader = styled.div`
  font-size: 3em;
  color: black;
  margin-bottom: auto;
  transform: translateY(-60%);

  @media (max-width: 850px) {
    font-size: 2em;
    transform: translateY(-35%);
  }
  @media (max-width: 375px) and (max-height: 670px) {
    transform: translateY(-50%);
  }
  @media (min-height: 1024px) {
    font-size: 3em;
  }
  @media (min-height: 1366px) and (max-width: 1024px) {
    transform: translateY(-30%);
  }
`;

export const ContactInfoContainer = styled.div`
  font-size: 1.8em;
  transform: translateY(-35%);

  @media (min-height: 1024px) {
    font-size: 2em;
  }
  @media (min-height: 1360px) {
    font-size: 2em;
  }
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  list-style: none;

  @media (max-width: 400px) {
    transform: translateY(15%);
  }
  @media (max-width: 375px) {
    transform: translateY(-15%);
  }
  @media (max-width: 375px) and (max-height: 670px) {
    transform: translateY(0%);
  }
  @media (max-width: 360px) {
    transform: translateY(-5%);
  }
  @media (max-width: 320px) {
    transform: translateY(-15%);
  }

  @media (min-height: 810px) {
    transform: translateY(10%);
  }
`;

export const ContactItem = styled.li`
  font-size: 1.75em;
  padding: 5px;
  @media (max-width: 850px) {
    font-size: 1em;
    padding: 10px;
    margin: 15px;
    transform: translateY(35%);
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
    padding: 5px;
    margin: 5px;
  }
  @media (max-width: 360px) {
    font-size: 1em;
    padding: 10px;
    margin: 10px;
  }
  @media (min-height: 1024px) {
    transform: translateY(0%);
    margin: 25px;
    padding: 15px;
  }
  @media (min-height: 1360px) {
    transform: translateY(0%);
    margin: 35px;
    padding: 30px;
  }
  @media (min-height: 800px) {
    margin: 10px;
    font-size: 1.3em;
  }
`;

export const ContactLink = styled.a`
  color: white;
  cursor: pointer;
`;
