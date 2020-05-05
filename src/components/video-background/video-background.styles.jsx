import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: -100;
`;

export const Video = styled.video`
  objectfit: cover;
  width: 100%;
  height: 100%;
`;
