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
    transform: translateY(50%);
  }
`;

export const BodyAbout = styled.div`
  font-family: "Lora", serif;
  margin: auto;
  width: 30%;
  @media (max-width: 800px) {
    width: 95%;
    background: rgba(255, 255, 255, 0.65);
    transform: translateY(-10%);
  }
`;

export const Body = styled.p`
  color: white;
  font-size: 1.75em;
  @media (max-width: 800px) {
    font-size: 1.2em;
    color: black;
  }
`;
