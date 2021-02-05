import { EMOJI_LIST, CHALLENGE_LENGTH, LANDMARKS } from "./config";
import Capture from "../Capture/Capture";
import HandSet from "../HandSet";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

require("@tensorflow/tfjs-backend-webgl");

const Challenge = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Signature = styled.div`
  position: absolute;
  font-size: 20px;
  bottom: 0px;
  right: 20px;
`;

const HandChallenge = () => {
  const [model, setModel] = useState(null);
  const [brain, setBrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const generateChallenge = () => {
    let combinationDict = {};
    let indexRandom;
    let emoji;
    for (let i = 0; i < CHALLENGE_LENGTH; i++) {
      let emojiList = [...EMOJI_LIST];
      if (i > 0) {
        let lastIndex = emojiList.indexOf(emoji);
        if (lastIndex === emojiList.length - 1) {
          emojiList.pop();
        } else {
          emojiList.splice(lastIndex, 1);
        }
      }
      indexRandom = Math.floor(Math.random() * emojiList.length);
      emoji = emojiList[indexRandom];
      combinationDict[i] = [emojiList[indexRandom], false];
    }
    return combinationDict;
  };

  if (step === Object.keys(challenge).length) {
    setStep(0);
    setChallenge(generateChallenge());
  } else if (EMOJI_LIST[prediction] === challenge[step][0]) {
    challenge[step][1] = true;
    setStep(step + 1);
  }

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
    setChallenge(generateChallenge());
  }, []);

  const drawHands = useCallback(
    async (context, video) => {
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
        if (predictions[0].handInViewConfidence > 0.9) {
          let shape = [1, 42];
          let tensor = tf.tensor(inputs, shape);
          const brainPrediction = await brain.predict(tensor);
          if (brainPrediction) {
            tf.argMax(brainPrediction, 1)
              .data()
              .then((data) => setPrediction(data[0]));
          }
        }
      }
    },
    [model, brain]
  );

  const warmUp = useCallback(
    async (video) => {
      let shape = [1, 42];
      let tensor = tf.tensor(LANDMARKS, shape);
      const brainPrediction = await brain.predict(tensor);
      brainPrediction.dataSync();
      brainPrediction.dispose();

      await model.estimateHands(video);

      setTimeout(() => {
        setLoading(false);
      }, 7000);
    },
    [model, brain]
  );

  if (!(model && brain)) {
    return (
      <img
        alt=""
        src="https://cdn.dribbble.com/users/989157/screenshots/4632455/loading-animation-bored-hand.gif"
      />
    );
  } else {
    return (
      <>
        <Challenge>
          {loading ? (
            <img
              alt=""
              src="https://cdn.dribbble.com/users/989157/screenshots/4632455/loading-animation-bored-hand.gif"
            />
          ) : (
            <HandSet handDict={challenge} />
          )}
          <Capture
            drawFunction={drawHands}
            onWarmUp={warmUp}
            display={loading}
          />
          <Signature>
            <p>Coded with 🤙🏻 by Baptiste Monpezat</p>
          </Signature>
        </Challenge>
      </>
    );
  }
};

export default HandChallenge;
