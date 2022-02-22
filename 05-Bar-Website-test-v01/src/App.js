import React, { /*useReducer, useRef*/ Fragment, useEffect, useState } from "react";

import './App.css';
import Martini from "./components/Drinks/Maritni"
import Negroni from "./components/Drinks/Negroni"
import Drink from "./components/Drinks/Drink"
import Button from "./components/UI/Button"
 
const App = () => {

  const [selectedDrink, setSelectedDrink] = useState({name: "NONE"});
  const [drinkObj, setDrinkObj] = useState({});
  
  useEffect( () => {console.log('current drink: ' + selectedDrink.name)}, );
 
  const loadMartini = () => {
    setSelectedDrink({name: "MARTINI"});
    setDrinkObj({
      name: "Martini",
      hardware: ["cocktail glass", "mixing glass", "strainer"],
      software: ["ice", "dry gin(3oz)", "dry vermouth(1/2oz)", "2-3 dashes bitters", "twist of lemon"],
      steps: ["fill mixing glass with ice", "add gin and vermouth", "stir until chilled", "add lemon twist to glass", "strain drink into glass"],
      person: "unknown, ratios acording to IBA",
      link: ["https://en.wikipedia.org/wiki/Martini_(cocktail)"]
      
    })
  }

  const loadNegroni = () => {
    setSelectedDrink({name: "NEGRONI"});
    setDrinkObj({
      name: "Negroni",
      hardware: ["rocks glass", "mixing glass", "strainer"],
      software: ["ice", "dry gin(1oz)", "sweet vermouth(1oz)", "campari(1oz)", "twist of orange"],
      steps: ["fill mixing glass with ice", "add gin, campari and vermouth", "stir until chilled", "add orange twist to glass", "strain drink into glass"],
      person: "Fosco Scarselli/Pascal Olivier Count de Negroni, ratios acording to HTD",
      link: ["https://en.wikipedia.org/wiki/Negroni", "https://www.youtube.com/watch?v=kbGCnu39YGM&ab_channel=HowToDrink"]
      
    })
  }

/*********************************************
** when I make the CSV file I should make   **
** a row for ingreedients and a row for     **
** quantities and display them with a table **
** so that I can do conversions             **
**********************************************/

  const clearDrink = () => {
    setSelectedDrink({name: "NONE"});
  }


  return (
    <Fragment>
      <Button onClick={clearDrink}>clear selection</Button>
      <Button onClick={loadMartini}>load martini</Button>
      <Button onClick={loadNegroni}>load negroni</Button>
      
      {selectedDrink.name != "NONE" && <Drink info={drinkObj}/>}

    </Fragment>
  );
};

export default App;
