import React from "react";

import { VideoContainer, Video } from "./video-background.styles";

const VideoBackgroundPortfolio = () => (
  <VideoContainer>
    <Video autoPlay>
      <source src={require("../../assets/video-background-portfolio.mp4")} />
    </Video>
  </VideoContainer>
);

export default VideoBackgroundPortfolio;
