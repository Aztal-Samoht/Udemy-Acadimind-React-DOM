import React, {
  /*useReducer,  useRef, useEffect, useContext, useImperativeahandle, Fragment, */useState, 
} from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const togleCartIsShownHandler = () => {
    console.log('toggle fun reached')
    if (cartIsShown){
      setCartIsShown(false);
      return;
    }
    setCartIsShown(true);
  }  

  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={togleCartIsShownHandler}/>}
      <Header onButtonClick={togleCartIsShownHandler}/>
      <main>
        <Meals />
      </main>
      
    </CartProvider>
  );
}

export default App;