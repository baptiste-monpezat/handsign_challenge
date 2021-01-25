import styled from "styled-components";
import DataContext from "../HandChallenge/DataContext";
import { useEffect, useState, useContext } from "react";
import { EMOJI_LIST } from "./config";

const Emoji = styled.span`
  font-size: 50px;
`;

const Hand = () => {
  const emojiIndex = useContext(DataContext);
  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    setEmoji(EMOJI_LIST[emojiIndex]);
  }, [emojiIndex]);

  return <Emoji>{emoji}</Emoji>;
};

export default Hand;
