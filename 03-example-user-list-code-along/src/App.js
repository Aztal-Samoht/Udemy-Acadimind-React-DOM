import React, { useState, /*useRef,*/ Fragment } from "react";

import "./App.css";
//import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";
import AddUser2 from "./components/Users/AddUser2";
import AddUser3 from "./components/Users/AddUser3";
import FooBar from "./components/FooBar";
//import Wrapper from "./components/Helpers/Wrapper";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    console.log("'addUserHandler' accessed form 'App'");
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(usersList);
  };

  

  return (
    //<Card bckground="black">
    <Fragment>
      <FooBar/>
      {/* <AddUser onAddUser={addUserHandler} />*/}
      {/* <AddUser2 onAddUser={addUserHandler}/>  */}
      <AddUser3 onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </Fragment> //</Card>
  );
};

export default App;
