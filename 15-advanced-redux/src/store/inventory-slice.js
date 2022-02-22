import { createSlice } from '@reduxjs/toolkit'

const initialState = {items:[]};

const inventorySlice = createSlice({
    name: 'inv',
    initialState,
    reducers:{

    }
})

export const invActions = inventorySlice.actions;

export default inventorySlice.reducer;