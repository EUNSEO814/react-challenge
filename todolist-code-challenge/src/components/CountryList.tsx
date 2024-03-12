import { useRecoilValue } from "recoil";
import Country from "./Country";
import CreateCountry from "./CreateCountry";
import { countrySelector } from "../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 58px;
`;

const SubTitle = styled.h2`
  font-size: 32px;
`;

const Ul = styled.ul`
  width: 300px;
  margin: 10px;
`;

const CountryList = () => {
  const [want, visited, fav] = useRecoilValue(countrySelector);
  console.log(want, visited, fav);

  return (
    <Wrapper>
      <Title>TRAVEL</Title>
      <SubTitle>내가 가고싶은 나라들</SubTitle>
      <CreateCountry />
      <Ul>
        {want.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </Ul>
      <SubTitle>내가 가본 나라들</SubTitle>
      <Ul>
        {visited.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </Ul>
      <SubTitle>내가 좋아하는 나라들</SubTitle>
      <Ul>
        {fav.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </Ul>
    </Wrapper>
  );
};

export default CountryList;
