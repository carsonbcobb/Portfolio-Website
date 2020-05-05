import React from "react";

import { VideoContainer, Video } from "./video-background.styles";

const VideoBackgroundAbout = () => (
  <VideoContainer>
    <Video autoPlay>
      <source src={require("../../assets/video-background-about.mp4")} />
    </Video>
  </VideoContainer>
);

export default VideoBackgroundAbout;
