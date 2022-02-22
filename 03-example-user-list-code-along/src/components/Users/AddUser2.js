import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper"

const AddUser = (props) =>{

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef.current.value);
    var currentName = nameInputRef.current.value;

    console.log(ageInputRef.current.value);
    var currentAge = ageInputRef.current.value;

    if (
      currentName.trim().length === 0 ||
      currentAge.trim().length === 0 ||
      +currentAge < 1
    ) {
      setError({
        title: "invalid input",
        message: "please enter a name and a positive int",
      });
      return;
    }
    console.log("added: " + currentName + ", who is " + currentAge);
    props.onAddUser(currentName, currentAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          reset={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <div />
          <label htmlFor="age">Age [years(integer)]</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User (using refs)</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
