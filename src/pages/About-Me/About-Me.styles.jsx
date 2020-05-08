import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const HeaderAbout = styled.div`
  margin-bottom: auto;
  transform: translateY(-40%);
`;

export const HeaderTitle = styled.h1`
  font-size: 5em;
  @media (max-width: 800px) {
    font-size: 4em;
    color: black;
    transform: translateY(50%);
  }
`;

export const BodyAbout = styled.div`
  font-family: "Lora", serif;
  margin: auto;
  width: 30%;
  font-size: 1.5rem;
  @media (max-width: 800px) {
    width: 95%;
    background: rgba(255, 255, 255, 0.65);
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    transform: translateY(-15%);
    font-size: 0.9em;
  }
  @media (min-height: 1020px) and (max-width: 769px) {
    width: 75%;
    transform: translateY(15%);
    font-size: 1.75em;
  }
  @media (min-height: 1360px) and (max-width: 1024px) {
    width: 40%;
    font-size: 1.2em;
    transform: translateY(15%);
  }
  @media (min-height: 800px) and (max-width: 800px) {
    font-size: 1.2em;
  }
`;

export const Body = styled.p`
  color: white;
  @media (max-width: 800px) {
    color: black;
  }
`;
