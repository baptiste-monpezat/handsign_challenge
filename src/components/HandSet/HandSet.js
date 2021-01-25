import Hand from "../Emoji/Emoji";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HandDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const HandSet = ({ combinationSize = 6 }) => {
  const [combination, setCombination] = useState(null);

  useEffect(() => {
    let list = [];
    for (let j = 0; j <= combinationSize; j++) {
      list.push(<Hand key={j} />);
    }
    setCombination(list);
  }, [setCombination, combinationSize]);

  return <HandDiv>{combination}</HandDiv>;
};

export default HandSet;
