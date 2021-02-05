import { useRef, useEffect } from "react";
import styled from "styled-components";
import { CONSTRAINTS } from "./config";

const Video = styled.video`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const VideoFeed = ({ debug = false, fps = 60, onCapture, onWarmUp }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      let requestId;
      let newStream;
      navigator.mediaDevices
        .getUserMedia(CONSTRAINTS)
        .then((stream) => {
          newStream = stream;
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          const onLoadedData = async () => {
            await onWarmUp(video);

            const update = (timestamp) => {
              onCapture(timestamp, videoRef.current);

              if (fps < 60) {
                const timeout = setTimeout(() => {
                  requestId = requestAnimationFrame(update);
                  clearTimeout(timeout);
                }, 1000 / fps);
              } else {
                requestId = requestAnimationFrame(update);
              }
            };
            requestId = requestAnimationFrame(update);
          };

          video.addEventListener("loadeddata", onLoadedData);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        const tracks = newStream && newStream.getTracks();

        if (tracks && tracks.length) tracks.forEach((track) => track.stop());
        else console.error(`Can't stop new stream`);

        if (requestId) cancelAnimationFrame(requestId);
      };
    }
  }, [debug, fps, onCapture, onWarmUp]);

  return (
    <>
      <Video ref={videoRef} hidden={!debug} />
    </>
  );
};

export default VideoFeed;
