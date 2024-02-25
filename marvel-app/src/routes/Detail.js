import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const ImgSt = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  width: 95%;
  height: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DetailSt = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin: 20px;
`;

const Desc = styled.p``;

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetail(json.data.results[0]);
  };

  useEffect(() => {
    getDetail();
    console.log(detail);
  }, []);
  return (
    <Wrapper>
      <ImgSt>
        <Img
          src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
          alt={detail.name}
        />
      </ImgSt>
      <DetailSt>
        <Title>{detail.name}</Title>
        <Desc>{detail.description ? detail.description : null}</Desc>
        <h2>Series</h2>
        <ul>
          {detail.series.items &&
            detail.series.items.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
        </ul>
      </DetailSt>
    </Wrapper>
  );
};

export default Detail;
