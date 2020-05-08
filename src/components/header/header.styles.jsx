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
  @media (max-width: 850px) {
    width: 50%;
  }
`;

export const Name = styled.span`
  color: black;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 25px;

  @media (max-width: 850px) {
    font-size: 1.5em;
    margin-left: 10px;
  }
`;
