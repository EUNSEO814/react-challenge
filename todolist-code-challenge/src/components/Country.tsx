import { useSetRecoilState } from "recoil";
import { Categories, ICountry, countryState } from "../atoms";

const Country = ({ text, category, id }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    console.log(e.currentTarget.name);

    setCountries((oldCountries) => {
      const targetIndex = oldCountries.findIndex(
        (country) => country.id === id
      );
      const newCountry = { text, id, category: name as Categories };
      console.log(targetIndex, newCountry);
      return [
        ...oldCountries.slice(0, targetIndex),
        newCountry,
        ...oldCountries.slice(targetIndex + 1),
      ];
    });
  };
  const handleDelete = () => {
    setCountries((oldCountries) => {
      const updatedCountries = oldCountries.filter(
        (country) => country.id !== id
      );
      return updatedCountries;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category === Categories.WANT && (
        <>
          <button name={Categories.VISITED} onClick={onClick}>
            ✅
          </button>
          <button onClick={handleDelete}>🗑️</button>
        </>
      )}
      {category === Categories.VISITED && (
        <>
          <button name={Categories.FAV} onClick={onClick}>
            👍
          </button>
          <button name={Categories.WANT} onClick={onClick}>
            ❌
          </button>
        </>
      )}
      {category === Categories.FAV && (
        <>
          <button name={Categories.VISITED} onClick={onClick}>
            👎
          </button>
        </>
      )}
    </li>
  );
};

export default Country;
