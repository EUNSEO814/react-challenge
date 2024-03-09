import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../api";

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
      <h1>Disney Characters</h1>
      {data?.map((char) => (
        <Link key={char.id} to={`character/${char.id}`}>
          <img src={char.imageUrl} alt={char.name} />
          <li>{char.name}</li>
        </Link>
      ))}
    </>
  );
};

export default Characters;
