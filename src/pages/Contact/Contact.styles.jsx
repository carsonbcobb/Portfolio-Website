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
  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

export const ContactInfoContainer = styled.div`
  font-size: 1.5em;
`;

export const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  list-style: none;
  transform: translateY(-0%);
`;

export const ContactItem = styled.li`
  font-size: 1.75em;
  padding: 15px;
  @media (max-width: 800px) {
    font-size: 1em;
    padding: 10px;
    margin: 15px;
    transform: translateY(35%);
  }
`;

export const ContactLink = styled.a`
  color: white;
  cursor: pointer;
`;

export const ContactLink2 = styled(ContactLink)`
  @media (max-width: 800px) {
    opacity: 0;
    color: black;
    animation: ${fadeIn} 1.5s ease-in;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
  }
`;
