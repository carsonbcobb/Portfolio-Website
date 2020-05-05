import React from "react";

import { VideoContainer, Video } from "./video-background.styles";

const VideoBackgroundContact = () => (
  <VideoContainer>
    <Video autoPlay>
      <source src={require("../../assets/video-background-contact.mp4")} />
    </Video>
  </VideoContainer>
);

export default VideoBackgroundContact;
