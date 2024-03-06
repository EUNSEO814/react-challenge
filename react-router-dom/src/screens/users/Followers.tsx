import { useOutletContext } from "react-router-dom";

const Followers = () => {
  // 방법 1.
  // const { userId } = useParams();

  //   방법 2.
  interface IFollowersContext {
    nameOfMyUser: string;
  }
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  console.log(nameOfMyUser);

  return <h1>Here are {nameOfMyUser}'s followers</h1>;
};

export default Followers;
