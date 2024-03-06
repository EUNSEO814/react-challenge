import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../db";
const BookDetail = () => {
  const { bookURL } = useParams();
  const book = authors
    .map((author) => author.books.find((book) => book.bookURL === bookURL))
    .find((book) => book !== undefined);

  return (
    <>
      <h1>{book?.title}</h1>
      <ul>
        <div>
          <Link to={`chapters`}>Chapters</Link>
        </div>
        <div>
          <Link to={`Characters`}>Characters</Link>
        </div>
      </ul>
      <Outlet />
    </>
  );
};

export default BookDetail;
