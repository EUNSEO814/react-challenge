import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
import styled from "styled-components";

const TitleSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.span`
  color: white;
  font-size: 120px;
  font-weight: bolder;
  margin: 40px;
  background-color: #ec1d24;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [marvel, setMarvel] = useState([]);

  const getMarvel = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();

    setMarvel(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMarvel();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <TitleSt>
            <Title>Marvel</Title>
          </TitleSt>

          <Wrapper>
            {marvel &&
              marvel.map((char) => (
                <Marvel
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  img={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                  comics={char.comics.items}
                />
              ))}
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default Home;
