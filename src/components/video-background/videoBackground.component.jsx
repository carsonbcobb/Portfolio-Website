import React from "react";

import { VideoContainer, Video } from "./video-background.styles";

const VideoBackground = () => (
  <VideoContainer>
    <Video autoPlay>
      <source src={require("../../assets/background-trim.mp4")} />
    </Video>
  </VideoContainer>
);

export default VideoBackground;
