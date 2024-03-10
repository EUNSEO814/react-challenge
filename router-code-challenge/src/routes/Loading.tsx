import styled, { keyframes } from "styled-components";

const LoadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #0002;
  position: fixed;
`;

const rotate = keyframes`
    from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }

`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #3498db;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingSpinner />
    </LoadingWrap>
  );
};

export default Loading;
