import VideoFeed from "../VideoFeed/VideoFeed";
import { CONSTRAINTS } from "../VideoFeed/config";
import { useRef, useCallback } from "react";
import styled from "styled-components";

const Capture = ({ drawFunction }) => {
  const canvasRef = useRef(null);

  const handleCapture = useCallback(
    (timestamp, video) => {
      if (video != null) {
        const context = canvasRef.current.getContext("2d");
        context.drawImage(
          video,
          0,
          0,
          CONSTRAINTS.video.width,
          CONSTRAINTS.video.height
        );
        if (video.readyState === 4) {
          drawFunction(context, video);
        }
      }
    },
    [drawFunction]
  );

  return (
    <>
      <VideoFeed debug={true} onCapture={handleCapture} />
      <canvas ref={canvasRef} {...CONSTRAINTS.video} />
    </>
  );
};

export default Capture;
