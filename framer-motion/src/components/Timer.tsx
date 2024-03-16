import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  timerState,
  isTimerActiveState,
  roundCountState,
  goalState,
} from "../atoms";

import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 58px;
  font-weight: 900;
  text-align: center;
  padding: 40px;
`;

const BoxArea = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 80px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  font-weight: 900;
  color: rgb(228, 67, 55);
`;

const ColonArea = styled.div`
  div:first-child {
    margin-bottom: 20px;
  }
`;

const Colon = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 100%;
  width: 14px;
  height: 14px;
`;
const SvgContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 90px auto;
`;

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;
  fill: rgba(255, 255, 255, 1);
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const CountArea = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
`;
const Count = styled.div`
  color: rgba(255, 255, 255, 0.4);
`;
const CountTitle = styled.div`
  color: rgba(255, 255, 255, 1);
`;

const boxVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1.2,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { scale: 1, opacity: 1 },
};

const svgVariants = {
  hover: { scale: 1.2 },
};

const Timer = () => {
  const [timer, setTimer] = useRecoilState(timerState);
  const [timerActive, setTimerActive] = useRecoilState(isTimerActiveState);
  const [roundCount, setRoundCount] = useRecoilState(roundCountState);
  const [goal, setGoal] = useRecoilState(goalState);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;

    if (timerActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            return 1500;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [timerActive, setTimer]);

  useEffect(() => {
    if (timer === 0) {
      // 타이머가 0에 도달하면 일시적으로 타이머를 멈추고 사용자에게 00:00을 보여준다.
      setTimeout(() => {
        handleTimerEnd();
      }, 1000); // 1초(1000밀리초) 동안 00:00을 보여준 후, handleTimerEnd 함수를 호출한다.
    }
  }, [timer]);

  useEffect(() => {
    if (initialRender) {
      // 처음 렌더링될 때는 setInitialRender를 false로 설정하여 다음부터는 이 조건을 건너뛰게 함
      setInitialRender(false);
    } else if (roundCount === 0) {
      // roundCount가 0으로 리셋되었다면 goal 업데이트 필요
      setGoal((prevGoal) => {
        return prevGoal < 12 ? prevGoal + 1 : prevGoal;
      });
    }
  }, [roundCount]);

  const handleTimerEnd = () => {
    setTimerActive(false);
    setTimer(1500);
    setRoundCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 4) {
        // roundCount가 4에 도달하면 0으로 리셋
        return 0;
      }
      return newCount;
    });
  };

  return (
    <Wrapper>
      <Title>Pomodoro</Title>
      <BoxArea
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={`minutes-${Math.floor(timer / 60)}`}
        >
          {Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}
        </Box>
        <ColonArea>
          <Colon />
          <Colon />
        </ColonArea>
        <Box
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={`seconds-${timer}`}
        >
          {(timer % 60).toString().padStart(2, "0")}
        </Box>
      </BoxArea>

      <SvgContainer
        variants={svgVariants}
        whileHover="hover"
        onClick={() => setTimerActive((prev) => !prev)}
      >
        {timerActive ? (
          <Svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" />
          </Svg>
        ) : (
          <Svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
          </Svg>
        )}
      </SvgContainer>

      <CountContainer>
        <CountArea>
          <Count>{roundCount}/4</Count>
          <CountTitle>ROUND</CountTitle>
        </CountArea>
        <CountArea>
          <Count>{goal}/12</Count>
          <CountTitle>GOAL</CountTitle>
        </CountArea>
      </CountContainer>
    </Wrapper>
  );
};

export default Timer;
