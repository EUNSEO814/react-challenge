import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`

0%{
    transform: rotate(0deg);
    border-radius: 0px;
}
50%{
    border-radius: 100px;
}
100%{
    transform: rotate(0deg);
    border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;
const AnimationsAndPseudoSelectors = () => {
  return (
    <Wrapper>
      <Box>
        <Emoji>🥰</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
};

export default AnimationsAndPseudoSelectors;
