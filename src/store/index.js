import {  createSlice, configureStore } from "@reduxjs/toolkit";
const initialState={
    counter:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state,action){
           state.counter++
        },
        decrement(state,action){
             state.counter--;
                    },
        add(state,action){
           state.counter += action.payload;
                    }

    }
   
})
export const actions =counterSlice.actions;
export const store= configureStore({
    reducer: counterSlice.reducer
})