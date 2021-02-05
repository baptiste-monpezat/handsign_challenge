import VideoFeed from "../VideoFeed/VideoFeed";
import { CONSTRAINTS } from "../VideoFeed/config";
import { useRef, useCallback } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  display: ${(props) => (props.displayCanvas ? "none" : "block")};
`;

const Capture = ({ drawFunction, onWarmUp, display }) => {
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
      <VideoFeed debug={false} onCapture={handleCapture} onWarmUp={onWarmUp} />
      <Canvas ref={canvasRef} {...CONSTRAINTS.video} displayCanvas={display} />
    </>
  );
};

export default Capture;
