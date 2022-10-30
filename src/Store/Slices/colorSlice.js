import { createSlice } from '@reduxjs/toolkit'

export const colorSlice = createSlice({
  name: 'colors',
  initialState: {
    color: "#FFFFFF",
    mainColor: "#FFFFFF",
  },
  reducers: {
    
    changeColor: (state, action) => { //? A more context-like way to handle actions
      return {
        ...state,
        color : action.payload.backColor,
        mainColor : action.payload.mainColor
      }
    },    

    

  }
})

export const {changeColor} = colorSlice.actions


export default colorSlice.reducer