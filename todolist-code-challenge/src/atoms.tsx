import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
  "WANT" = "WANT",
  "VISITED" = "VISITED",
  "FAV" = "FAV",
}

export interface ICountry {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.WANT,
  effects_UNSTABLE: [persistAtom],
});

export const countryState = atom<ICountry[]>({
  key: "country",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const countrySelector = selector({
  key: "countrySelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return [
      countries.filter((country) => country.category === Categories.WANT),
      countries.filter((country) => country.category === Categories.VISITED),
      countries.filter((country) => country.category === Categories.FAV),
    ];
  },
});
