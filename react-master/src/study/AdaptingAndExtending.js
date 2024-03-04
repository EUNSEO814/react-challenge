import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// Adapting
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Extending

// 1.
// const Circle = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
// `;

// 2.

const Circle = styled(Box)`
  border-radius: 50px;
`;

const AdaptingAndExtending = () => {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="yellow" />
    </Father>
  );
};

export default AdaptingAndExtending;
