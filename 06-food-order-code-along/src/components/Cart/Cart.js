import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import useHTTP from "../../hooks/useHTTP";

const Cart = (props) => {
  const request = useHTTP();
  const cartCtx = useContext(CartContext);

  const totalAmount = "$" + cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1});
  };

  const submitOrderHnadler = () => {
    request.sendOrder(cartCtx.items)
    cartCtx.resetCart();
    props.closeCart();
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          data={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.closeCart} className={classes["buton--alt"]}>
          close
        </button>
        {hasItems && <button onClick={submitOrderHnadler} className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
