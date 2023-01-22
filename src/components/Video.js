// Video Section : It imports Player components and send the link as props;

import React from "react";
import Player from "./Player";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Sticky,
} from "react-scroll-motion";

function Video() {
  //These are the links from where the video will be fetched;
  const links = [
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
  ];
  return (
    <ScrollContainer>
      {links.map((link, index) => (
        <ScrollPage>
          <Animator
            animation={batch(Fade(), Sticky())}
            style={{ transform: "translate(-10%,-40%)" }}
          >
            <Player link={link} key={index} />
          </Animator>
        </ScrollPage>
      ))}
    </ScrollContainer>
  );
}

export default Video;
