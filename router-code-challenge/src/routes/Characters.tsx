import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../api";
import Loading from "./Loading";

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: 30px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
  }
`;

const ImgContain = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const CharName = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

interface ICharacter {
  id: string;
  name: string;
  imageUrl: string;
}

const Characters = () => {
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ["character"],
    queryFn: fetchCharacter,
    select: (data) => data.slice(0, 30),
  });

  return (
    <>
      <Title>Disney Characters</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          {data?.map((char) => (
            <Container>
              <Link key={char.id} to={`character/${char.id}`}>
                <ImgContain>
                  <Img src={char.imageUrl} alt={char.name} />
                </ImgContain>
                <CharName>{char.name}</CharName>
              </Link>
            </Container>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Characters;
