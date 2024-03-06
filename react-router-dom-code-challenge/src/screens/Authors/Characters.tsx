import { useParams } from "react-router-dom";
import { authors } from "../../db";

const Characters = () => {
  const { authorURL, bookURL } = useParams();

  // 작가와 책을 찾기
  const author = authors.find((author) => author.authorURL === authorURL);
  const book = author?.books.find((book) => book.bookURL === bookURL);

  return (
    <div>
      <h2>Characters</h2>
      {book &&
        book.characters?.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
    </div>
  );
};

export default Characters;
