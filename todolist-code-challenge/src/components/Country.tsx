import { useSetRecoilState } from "recoil";
import { Categories, ICountry, countryState } from "../atoms";
import styled from "styled-components";

const List = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  margin: 6px;
  padding: 6px;
  border-radius: 4px;
  position: relative;
`;
const BtnArea = styled.span`
  position: absolute;
  right: 0;
`;

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
    <List>
      <span>{text}</span>
      <BtnArea>
        {category === Categories.WANT && (
          <>
            <button name={Categories.VISITED} onClick={onClick}>
              ✅
            </button>
            <button onClick={handleDelete}>🗑️</button>
          </>
        )}
      </BtnArea>

      {category === Categories.VISITED && (
        <BtnArea>
          <button name={Categories.FAV} onClick={onClick}>
            👍
          </button>
          <button name={Categories.WANT} onClick={onClick}>
            ❌
          </button>
        </BtnArea>
      )}

      {category === Categories.FAV && (
        <BtnArea>
          <button name={Categories.VISITED} onClick={onClick}>
            👎
          </button>
        </BtnArea>
      )}
    </List>
  );
};

export default Country;
