import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  //   console.log(userId);
  return (
    <div>
      <h1>
        User with id {userId} is named : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      {/* 상대경로 URL: /를 안쓰면 현재 있는 URL 경로 다음에 경로가 추가됨. */}

      {/* 방법 2. context */}
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};

export default User;
