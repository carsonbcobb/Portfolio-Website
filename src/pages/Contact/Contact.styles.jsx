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
  @media (max-width: 850px) {
    font-size: 2em;
  }
  @media (min-height: 1024px) {
    font-size: 3em;
  }
`;

export const ContactInfoContainer = styled.div`
  font-size: 1.5em;
  @media (min-height: 1024px) {
    font-size: 3em;
  }
  @media (min-height: 1360px) {
    font-size: 2em;
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
  @media (max-width: 360px) {
    transform: translateY(-15%);
  }
  @media (max-width: 320px) {
    transform: translateY(-25%);
  }

  @media (min-height: 810px) {
    transform: translateY(5%);
  }
`;

export const ContactItem = styled.li`
  font-size: 1.75em;
  padding: 5px;
  transform: translateY(-35%);
  @media (max-width: 850px) {
    font-size: 1em;
    padding: 10px;
    margin: 15px;
    transform: translateY(35%);
  }
  @media (max-width: 320px) {
    font-size: 0.8em;
  }
  @media (min-height: 1024px) {
    transform: translateY(-75%);
    margin: 25px;
    padding: 15px;
  }
  @media (min-height: 1360px) {
    transform: translateY(0%);
    margin: 45px;
    padding: 40px;
  }
  @media (min-height: 800px) {
    margin: 20px;
  }
`;

export const ContactLink = styled.a`
  color: white;
  cursor: pointer;
`;

export const ContactLink2 = styled(ContactLink)`
  @media (max-width: 850px) {
    opacity: 0;
    color: black;
    animation: ${fadeIn} 1.5s ease-in;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
  }
  @media (min-height: 1360px) {
    opacity: 0;
    color: black;
    animation: ${fadeIn} 1.5s ease-in;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
  }
`;
