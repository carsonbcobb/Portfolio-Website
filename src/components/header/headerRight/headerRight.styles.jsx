import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 850px) {
    flex-flow: column nowrap;
    background-color: #ff7878;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 8em;
    justify-content: flex-start;
    transition: transform 0.3s ease-in-out;
    z-index: 15;
  }
`;

export const OptionsLink = styled(Link)`
  font-size: 2em;
  padding: 10px 15px;
  cursor: pointer;
  color: black;
  transition: 1s ease;

  &:hover {
    transform: translateY(-15%);
    color: #3574b2;
  }
  @media (max-width: 850px) {
    font-size: 4.5em;
    padding: 1.5rem 1.5rem;
    color: white;

    &:hover {
      transform: translateY(0%);
      color: white;
    }
  }
  @media (max-height: 670px) {
    font-size: 3.5rem;
  }
  @media (max-height: 570px) {
    font-size: 3rem;
    padding-bottom: 10px;
  }
  @media (min-height: 1024px) and (max-width: 768px) {
    font-size: 5rem;
    margin: 30px;
  }
`;
