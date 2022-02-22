import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../.././../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.data.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.data.id,
      name: props.data.name,
      amount: amount,
      price: props.data.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={classes.description}>{props.data.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
