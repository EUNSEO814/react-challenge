import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchDetail } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const BackNav = styled.div`
  font-size: 52px;
  margin: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.btnColor};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 52px;
  margin-bottom: 30px;
`;

const ListContainer = styled.div`
  width: 40%;
  text-align: center;
  margin: 0 auto;
`;

const List = styled.span`
  display: inline-block;
  padding: 0 6px;
  margin: 4px;
  font-size: 32px;
  font-weight: 600;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;

const ExtraInfo = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 28px;
  color: ${(props) => props.theme.btnColor};
`;

interface IDetail {
  id: string;
  name: string;
  imageUrl: string;
  sourceUrl: string;
  films: string[];
}

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery<IDetail>({
    queryKey: ["detail", id],
    queryFn: () => fetchDetail(`${id}`),
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Container>
            <BackNav onClick={() => navigate("/")}>&larr;</BackNav>
            <ImgContainer>
              <Img src={data?.imageUrl} alt={data?.name} />
            </ImgContainer>
            <Title>{data?.name}'s Films'</Title>
          </Container>
          <ListContainer>
            {data?.films.map((film, index) => (
              <List key={index}>{film}</List>
            ))}
          </ListContainer>
          <ExtraInfo>
            <a href={data?.sourceUrl}>more info</a>
          </ExtraInfo>
        </>
      )}
    </Wrapper>
  );
};

export default Detail;
