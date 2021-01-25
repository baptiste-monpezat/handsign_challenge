import VideoFeed from "../VideoFeed/VideoFeed";
import { CONSTRAINTS } from "../VideoFeed/config";
import { useRef } from "react";

const Capture = ({ drawFunction }) => {
  const canvasRef = useRef(null);

  console.log("test");

  const handleCapture = (timestamp, video) => {
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
  };

  return (
    <>
      <VideoFeed debug={false} onCapture={handleCapture} />
      <canvas ref={canvasRef} {...CONSTRAINTS.video} />
    </>
  );
};

export default Capture;
