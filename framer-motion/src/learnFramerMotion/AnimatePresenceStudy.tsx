import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

// AnimatePresence : AnimatePresence는 안쪽에서 나타나거나 사라지는게 있으면 그것을 animate 할 수 있도록 해줌.
//  사용 규칙 1. visible 상태여야함. 2. AnimatePresence의 내부에는 condition(조건문)이 있어야함.

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
  },
  leaving: {
    opacity: 1,
    scale: 0,
    y: 50,
  },
};

const AnimatePresenceStudy = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default AnimatePresenceStudy;
