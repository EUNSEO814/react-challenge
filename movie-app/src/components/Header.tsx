import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 28px;
  font-weight: 900;
  width: 80%;
  height: 80px;
  margin: 20px 0;
  color: #e5e5e5;
`;

const NavList = styled.li`
  position: relative;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 5px;
  bottom: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #e51013;
`;

const Header = () => {
  const homeMatch = useMatch("/");
  const comingSoonMatch = useMatch("coming-soon");
  const nowPlaying = useMatch("now-playing");
  return (
    <Wrapper>
      <Nav>
        <Link to="/">
          <NavList>POPULAR {homeMatch && <Circle layoutId="circle" />}</NavList>
        </Link>
        <Link to="coming-soon">
          <NavList>
            COMING SOON {comingSoonMatch && <Circle layoutId="circle" />}
          </NavList>
        </Link>
        <Link to="now-playing">
          <NavList>
            NOW PLAYING {nowPlaying && <Circle layoutId="circle" />}
          </NavList>
        </Link>
      </Nav>
    </Wrapper>
  );
};

export default Header;
