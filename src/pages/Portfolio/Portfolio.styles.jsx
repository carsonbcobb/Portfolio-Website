import styled, { keyframes } from "styled-components";

//Animation

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const PortfolioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const HeaderPortfolio = styled.div`
  margin-bottom: auto;
`;

export const HeaderTitlePortfolio = styled.h1`
  font-size: 3.5em;
`;

export const ProjectContainer = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  opacity: 0;
  animation: ${fadeIn} 2.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

export const Project = styled.li`
  font-family: "Lora", serif;

  color: black;
  font-size: 1.5em;
  border: 2px solid black;
  background: rgba(255, 255, 255, 0.7);
  margin: 20%;
  border-radius: 20%;
  padding-top: 10px;
`;

export const LiveButton = styled.button`
  border: 1px solid rgba(155, 155, 155, 0.9);
  background: rgba(255, 255, 255, 0.8);
  font-size: 0.8em;
  color: black;
  padding: 5%;
  margin: 5%;
  border-radius: 10%;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background: rgba(155, 155, 155, 0.9);
    color: white;
  }
`;

export const CodeButton = styled.button`
  border: 1px solid rgba(50, 50, 50, 0.9);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.8em;
  border-radius: 10%;
  padding: 5%;
  margin: 5%;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: block;
`;

export const WebsiteImageContainer = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
`;
export const WebsiteImage = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid black;
  transform: translateY(25%);
`;
