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
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.span`
  font-size: 4em;
  color: white;
  animation: ${fadeIn} 4s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 40%;
  width: 40%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  animation: ${fadeIn} 7s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  height: 80%;
  width: 20%;
`;
