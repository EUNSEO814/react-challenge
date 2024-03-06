import { Link } from "react-router-dom";
import { authors } from "../db";

const Home = () => {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`author/${author.authorURL}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
