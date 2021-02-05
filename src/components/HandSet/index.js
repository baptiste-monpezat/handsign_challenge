import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const HandDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Emoji = styled.div`
  background: ${(props) => (props.validated ? "green" : "#aeecdb")};
`;

const HandSet = ({ handDict }) => {
  const items = Object.keys(handDict).map((key) => (
    <Emoji key={key} validated={handDict[key][1]}>
      {handDict[key][0]}
    </Emoji>
  ));

  const key = Object.keys(handDict).map((key) => handDict[key][0]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={key.join("")}
          initial={{ x: 700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -700, opacity: 0 }}
        >
          <HandDiv>{items}</HandDiv>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HandSet;
