import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import buttonClasses from '../../UI/Button/Button.module.css'
import MealInput from "./MealInput";
import useValidate from '../../../hooks/useValidate'
import useHTTP from "../../../hooks/useHTTP";
import { Fragment } from "react";

const AddMeal = (props) => {
  const request = useHTTP();

  const {
    inputState: nameState,
    onChange: onNameChange,
    onBlur: onNameBlur,
    // reset: resetName,
  } = useValidate(x => x.trim() !== '')

  // console.log('nameState.value: ' + nameState.value + '\nnameState.isValid: ' + nameState.isValid + '\nnameState.hasError: ' + nameState.hasError)
  const nameClassString = nameState.hasError ? 'form-control invalid' : 'form-control'
  // console.log('nameClassString: ' +  nameClassString )
  
  const {
    inputState: descriptionState,
    onChange: onDescriptionChange,
    onBlur: onDescriptionBlur,
    // reset: resetDescription,
  } = useValidate(x => x.trim() !== '')

  const descriptionClassString = descriptionState.hasError ? 'form-control invalid' : 'form-control'
  
  const {
    inputState: priceState,
    onChange: onPriceChange,
    onBlur: onPriceBlur,
    // reset: resetPrice,
  } = useValidate(x => x.includes('.'))

  const priceClassString = priceState.hasError ? 'form-control invalid' : 'form-control'


  let formIsValid = nameState.isValid && descriptionState.isValid && priceState.isValid

  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    request.sendMeal({
      id: props.mealCount,
      name: nameState.value,
      descrtion: descriptionState.value,
      price: priceState.value
    });
    // resetName(),
    // resetDescription(),
    // resetPrice(),
    props.toggleForm();
  };

  return (
    <Card className={classes.meals}>
      {!props.show && <Button onClick={props.toggleForm}>add a meal</Button>}
      {props.show && (
        <Fragment>
          <form onSubmit={onSubmitHandler}>
          <h1>Add a Meal!</h1>
          <MealInput className={nameClassString} onChange={onNameChange} onBlur={onNameBlur} type='text' name='Name '/>
          <MealInput className={descriptionClassString} onChange={onDescriptionChange} onBlur={onDescriptionBlur} type='text' name='Description: '/>
          <MealInput className={priceClassString} onChange={onPriceChange} onBlur={onPriceBlur} type='number' name='Price: '/>
          <div>
          <button disabled={!formIsValid} className={buttonClasses.button}> submit </button>
          </div>
        </form>
        <button onClick={props.toggleForm} className={buttonClasses.button}> cancel </button>
      </Fragment>
      )}
    </Card>
  );
};
export default AddMeal;
