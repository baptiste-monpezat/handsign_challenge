import styled from "styled-components";

const HandDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Emoji = styled.div`
  background: ${(props) => (props.validated ? "green" : "red")};
`;

const HandSet = ({ handDict }) => {
  const items = Object.keys(handDict).map((key) => (
    <Emoji key={key} validated={handDict[key][1]}>
      {handDict[key][0]}
    </Emoji>
  ));

  return <HandDiv>{items}</HandDiv>;
};

export default HandSet;
