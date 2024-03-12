import { useRecoilValue } from "recoil";
import Country from "./Country";
import CreateCountry from "./CreateCountry";
import { countrySelector } from "../atoms";

const CountryList = () => {
  const [want, visited, fav] = useRecoilValue(countrySelector);
  console.log(want, visited, fav);

  return (
    <div>
      <h1>내가 가고싶은 나라들</h1>
      <CreateCountry />
      <ul>
        {want.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </ul>
      <h2>내가 가본 나라들</h2>
      <ul>
        {visited.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </ul>
      <h2>내가 좋아하는 나라들</h2>
      <ul>
        {fav.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
