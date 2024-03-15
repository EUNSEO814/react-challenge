import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
`;
// const boxVariants: Variants = {
//   entry: {
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 1,
//     },
//   },
//   exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
// };

const boxVariants: Variants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: -isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

// custom : variants에 데이터를 보낼 수 있게 해주는 임.

const SliderStudy = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevSlider = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextSlider = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={boxVariants}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )} */}
        <Box
          variants={boxVariants}
          custom={back}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevSlider}>prev</button>
      <button onClick={nextSlider}>next</button>
    </Wrapper>
  );
};

export default SliderStudy;
