import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './Slices/counterSlice';
import colorSlice  from './Slices/colorSlice';

export default configureStore({
  //? The reducer can accept one or multiple slices instead of a single all-encompassing reducer
  reducer: { 
    counter: counterSliceReducer,
    colors: colorSlice, 
  },
});