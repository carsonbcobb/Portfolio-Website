import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const HeaderAbout = styled.div`
  margin-bottom: auto;
  transform: translateY(-20%);
  @media (min-height: 1024px) and (max-width: 768px) {
    transform: translateY(0%);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 8em;
  color: white;
  @media (max-width: 850px) {
    font-size: 5em;
    transform: translateY(0%);
  }
  @media (max-width: 320px) {
    font-size: 3.5em;
  }
  @media (min-height: 1024px) and (max-width: 768px) {
    font-size: 8em;
  }
`;

export const BodyAbout = styled.div`
  font-family: "Lora", serif;
  margin: auto;
  width: 30%;
  font-size: 1.5rem;
  transform: translateY(-25%);

  @media (max-width: 800px) {
    width: 95%;
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1em;
  }
  @media (max-width: 320px) {
    transform: translateY(-15%);
    font-size: 0.9em;
  }
  @media (min-height: 1024px) and (max-width: 768px) {
    width: 75%;
    transform: translateY(15%);
    font-size: 4em;
  }
  @media (min-height: 1360px) and (max-width: 1024px) {
    width: 100%;
    font-size: 1.2em;
    transform: translateY(-15%);
  }
  @media (min-height: 800px) and (max-width: 800px) {
    font-size: 1.2em;
    transform: translateY(-15%);
  }
`;

export const Body = styled.p`
  color: white;
  @media (max-width: 800px) {
  }
  @media (min-height: 1024px) and (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (min-height: 1366px) and (max-width: 1024px) {
    font-size: 2em;
  }
`;
