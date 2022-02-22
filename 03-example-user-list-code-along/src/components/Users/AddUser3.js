import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser3 = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();  
  const [error, setError] = useState();
/*******************************************************************/

  const getInputs = () => {
    console.log(
      "values of input refs: " +
        nameInputRef.current.value +
        ", " +
        ageInputRef.current.value
    );
    return {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };
  };
/*******************************************************************/

  const addSubmition = (x) =>{
    props.onAddUser(x.name, x.age);
    console.log("added: " + x.name + ", who is " + x.age);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

/*******************************************************************/
  const badInput = w =>{
    if (noName(w)){
      return true;
    }
    if (noAge(w)){
      return true;
    }
    if (badAge(w)) {
      return true;
    }
  }

  const noName = x =>{
    if(x.name.trim().length === 0){
      setError({
        title: "no name found",
        message: "please enter a name",
      })
      return true;
    }
    return false;
  }

  const noAge = y =>{
    if(y.age.trim().length === 0){
      setError({
        title: "no age found",
        message: "please enter an age",
      })
      return true;
    }
    return false;
  }

  const badAge = z =>{
    if(z.age < 1){
      setError({
        title: "invalid age entered",
        message: "please enter a positive int",
      });
      return true;
    }
    return false;
  }
  /*******************************************************************/
  const addUserHandler = (event) => {
    event.preventDefault();

    const input = getInputs();
    if(badInput(input)){
      return;
    }
    addSubmition(input);
  };
  /*******************************************************************/
  const errorHandler = () => {
    setError(false);
  };

  /*******************************************************************/

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
          <input id="username" type="text" ref={nameInputRef} />
          <div />
          <label htmlFor="age">Age [years(integer)]</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User (using factoring)</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser3;
