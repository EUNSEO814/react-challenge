import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../db";

const Books = () => {
  const { authorURL } = useParams();
  const author = authors.find((author) => author.authorURL === authorURL);
  return (
    <>
      {author && <h1>{author.name}'s Books</h1>}
      <ul>
        {author &&
          author.books.map((book) => (
            <li key={book.id}>
              <Link to={`/author/${authorURL}/${book.bookURL}`}>
                {book.title}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};
export default Books;
