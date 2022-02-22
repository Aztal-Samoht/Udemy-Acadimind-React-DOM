import React from "react";
import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <SimpleInput />
      </div>
      <div className="app">
        <BasicForm />
      </div>
    </React.Fragment>
  );
}

export default App;
