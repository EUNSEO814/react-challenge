import React from "react";
import { useParams } from "react-router-dom";
import { authors } from "../../db";

const Chapter = () => {
  const { bookURL } = useParams();

  const book = authors
    .map((author) => author.books.find((book) => book.bookURL === bookURL))
    .find((book) => book !== undefined);

  return (
    <div>
      <h2>Chapters</h2>
      {book &&
        book.chapters.map((chapter) => (
          <li key={chapter.id}>{chapter.name}</li>
        ))}
    </div>
  );
};

export default Chapter;
