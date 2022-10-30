import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counterValue: 0
  },
  reducers: {
    increment: (state) => {state.counterValue += 1}, //? You can use mutating logic inside a slice
    decrement: (state) => {return {...state, counterValue : state.counterValue - 1 }},//? but you don't need to
    setNumber: (state, action) => {state.counterValue = action.payload}
  }
})

//Exported as actions of the reducer
export const {increment, decrement, setNumber} = counterSlice.actions


export default counterSlice.reducer