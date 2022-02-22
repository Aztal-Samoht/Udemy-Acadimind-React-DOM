import React from "react";  
import Button from "./UI/Button";

const bar = () => {
    console.log('a')
      foo();
      console.log('d');
  }
  const foo = () =>{
    if(true){
      console.log('b')
      return;
    }
    console.log('c')
  }

const FooBar = (props) =>{
    return <Button onClick={bar}/>;
}

export default FooBar;