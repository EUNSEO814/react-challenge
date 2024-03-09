import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchDetail } from "../api";
import { useParams } from "react-router-dom";

interface IDetail {
  id: string;
  name: string;
  imageUrl: string;
  sourceUrl: string;
  films: string[];
}

const Detail = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery<IDetail>({
    queryKey: ["detail"],
    queryFn: () => fetchDetail(`${id}`),
  });

  return (
    <>
      <h1>{data?.name}</h1>
      <img src={data?.imageUrl} alt={data?.name} />
      {data?.films.map((film, index) => (
        <li key={index}>{film}</li>
      ))}
      <div>
        more info : <a href={data?.sourceUrl}> </a>
      </div>
    </>
  );
};

export default Detail;
