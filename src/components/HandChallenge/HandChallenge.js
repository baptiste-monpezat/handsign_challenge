import Emoji from "../Emoji/Emoji";
import Capture from "../Capture/Capture";
import DataContext from "./DataContext";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { useState, useEffect } from "react";
import styled from "styled-components";

require("@tensorflow/tfjs-backend-webgl");

const Challenge = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HandChallenge = () => {
  const [model, setModel] = useState(null);
  const [brain, setBrain] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadHandPose = async () => {
      let model = await handpose.load();
      setModel(model);
    };
    const loadBrain = async () => {
      let brain = await tf.loadLayersModel(
        "https://handpose.baptiste-monpezat.vercel.app/model.json"
      );
      setBrain(brain);
    };
    loadHandPose();
    loadBrain();
  }, []);

  const drawHands = async (context, video) => {
    const predictions = await model.estimateHands(video);
    if (predictions.length > 0) {
      let inputs = [];
      for (let i = 0; i < predictions[0].landmarks.length; i++) {
        let x = predictions[0].landmarks[i][0];
        let y = predictions[0].landmarks[i][1];
        context.fillStyle = "#FFFFFF";
        context.fillRect(x, y, 10, 10);
        inputs.push(x);
        inputs.push(y);
      }
      if (predictions[0].handInViewConfidence > 0.7) {
        let shape = [1, 42];
        let tensor = tf.tensor(inputs, shape);
        const brainPrediction = await brain.predict(tensor);
        tf.argMax(brainPrediction, 1)
          .data()
          .then((data) => console.log(setPrediction(data[0])));
      }
    }
  };

  if (!(model && brain)) {
    return <div>Loading !</div>;
  } else {
    return (
      <>
        <Challenge>
          <Capture drawFunction={drawHands} />
          <DataContext.Provider value={prediction}>
            <Emoji />
          </DataContext.Provider>
        </Challenge>
      </>
    );
  }
};

export default HandChallenge;
