import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ImgSt = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  background-color: #ec1d24;
  &:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 95%;
  height: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
`;

const Name = styled.h2`
  padding: 12px;
  text-align: center;
  &:hover {
    color: #ec1d24;
    transition: all 0.3s ease-in-out;
  }
`;
const Marvel = ({ id, name, img, comics }) => {
  return (
    <Wrapper>
      <Link to={`/detail/${id}`}>
        <ImgSt>
          <div>
            <Img src={img} alt={name} />
          </div>
        </ImgSt>
        <Name>{name}</Name>
        {/* <ul>
        {comics.map((item, index) => (
            <li key={index}>{item.name}</li>
            ))}
        </ul> */}
      </Link>
    </Wrapper>
  );
};

export default Marvel;
