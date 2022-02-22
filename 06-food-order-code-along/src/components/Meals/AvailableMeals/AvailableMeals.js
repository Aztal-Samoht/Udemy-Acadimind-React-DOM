import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHTTP from "../../../hooks/useHTTP";
import { useEffect } from "react";

const AvailableMeals = (props) => {
  const request = useHTTP();

  useEffect(() => {
    request.getMeals(props.mealsObj.setMeals);
  },[request, props.mealsObj.setMeals])
  
  

  const mealsList = props.mealsObj.meals.map((x) => {
    return <MealItem key={x.id} data={x} />;
  });

  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
