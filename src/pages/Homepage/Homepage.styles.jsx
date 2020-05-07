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
export const HomePageContainer = styled.div`
  font-family: "Dancing Script", cursive;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
`;

export const NameContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    transform: translateY(-40%);
  }
`;

export const Name = styled.h1`
  font-size: 7em;
  font-weight: 500;
  color: white;
  animation: ${fadeIn} 4s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 800px) {
    font-size: 4em;
    color: black;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    margin-bottom: 10%;
    transform: translateY(-80%);
  }
`;

export const Title = styled.span`
  font-size: 4em;
  color: white;
  animation: ${fadeIn} 4s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  @media (max-width: 800px) {
    font-size: 2em;
    color: white;
    transform: translateY(-100%);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  width: 40%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    width: 100%;
    visibility: hidden;
    padding: 10%;
  }
`;

export const Logo = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  animation: ${fadeIn} 7s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  height: auto;
  width: 20%;
  @media (max-width: 800px) {
    width: 5%;
  }
`;
