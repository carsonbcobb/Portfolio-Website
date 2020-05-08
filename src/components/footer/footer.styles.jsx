import styled from "styled-components";

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
  @media (max-width: 850px) {
    width: 80%;
  }
`;

export const InfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2em;
  @media (max-width: 850px) {
    font-size: 1em;
    padding: 5%;
    transform: translateX(-10%);
  }
`;

export const SocialLink = styled.a`
  font-size: 2em;
  padding: 15px 10px;
  cursor: pointer;
  transition: 1s ease;

  &:hover {
    transform: translateY(-15%);
    color: #3574b2;
  }

  @media (max-width: 850px) {
    font-size: 1.2em;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 4%;
  padding: 5px;
  margin: 5px;
  @media (max-width: 850px) {
    padding: none;
    margin: none;
    width: 0%;
    visibility: hidden;
  }
`;
