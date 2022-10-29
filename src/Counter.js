import React,{useState,useEffect} from "react";
// import HOC from "./HOC";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const fetchusers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
      //console.log(json);
    };
    fetchusers();
  }, []);
//   const renderUsers = data.map((user) => {
//     // for rendering list on the screen for HOC
//     return (
//       <div key={user.id}>
//         <p>
//           <b>{user.name}</b>
//         </p>
//       </div>
//     );
//   });
  const filteredUsers = users    // for search bar functionality
    .filter(( {name} ) => {
      return name.indexOf(term) >= 0;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <p>
            <b>{user.name}</b>
          </p>
        </div>
      );
    });
  return (
    <div>
        <h2>Users</h2>
        <input type="text"
        value={term}
        onChange={(e)=>setTerm(e.target.value)} />
      {/* <div>{renderUsers}</div> */}
      <div>{filteredUsers}</div>
    </div>
  );
};
// const SearchUsers = HOC(UserList,"users")

// export default SearchUsers;
export default UserList;