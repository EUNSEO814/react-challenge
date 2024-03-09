import axios from "axios";

const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export const fetchCharacter = async () => {
  return await axios.get(`${BASE_URL}`).then((res) => res.data);
};

export const fetchDetail = async (id: string) => {
  return await axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
};
