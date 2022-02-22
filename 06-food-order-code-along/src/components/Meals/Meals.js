import React, {Fragment, useState} from "react";

import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import AddMeal from "./AddMeal/AddMeal";

const Meals = (props) => {
    const [meals, setMeals] = useState([])
    const [showAddMeal, setShowAddMeals] = useState(false);
  
  const addMealHandler = () => {
    // console.log('add meal fun reached\nshowAddMeal: ' + showAddMeal )
    if (showAddMeal){
      setShowAddMeals(false);
      return;
    }
    setShowAddMeals(true);
  }

    return <Fragment>
        <MealsSummary/>
        <AvailableMeals mealsObj={{meals, setMeals}} />
        <AddMeal mealCount={meals.length} show={showAddMeal} toggleForm={addMealHandler}/>
    </Fragment>
};

export default Meals;