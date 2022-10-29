import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/userSlice";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  console.log("--------------User Data", userData);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      {userData.users &&
        userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default UserContainer;
