import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const SocialLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2em;
`;

export const SocialLink = styled(Link)`
  font-size: 2em;
  padding: 15px 10px;
  cursor: pointer;
  transition: 1s ease;

  &:hover {
    transform: translateY(-15%);
    color: #3574b2;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 4%;
  padding: 5px;
  margin: 5px;
`;
