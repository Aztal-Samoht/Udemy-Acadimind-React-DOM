import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';
import invReducer from './inventory-slice';

const store = configureStore( 
    {reducer:{ ui: uiReducer, cart: cartReducer, inv: invReducer },}
);

export default store;