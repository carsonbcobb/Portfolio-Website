import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
`;

export const Logo = styled.img`
  height: auto;
  width: 15%;
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const OptionsLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
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

  @media (max-width: 800px) {
    font-size: 1em;
    padding: 5px 5px;
  }
`;

export const Name = styled.span`
  color: black;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 25px;

  @media (max-width: 800px) {
    font-size: 1.5em;
    margin-left: 10px;
  }
`;
