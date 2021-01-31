import styled from "styled-components";
import { useMemo } from "react";
import { EMOJI_LIST } from "./config";

const Emoji = styled.span`
  font-size: 50px;
`;

const Hand = ({ prediction }) => {
  const emoji = useMemo(() => EMOJI_LIST[prediction], [prediction]);

  return <Emoji>{emoji}</Emoji>;
};

export default Hand;
