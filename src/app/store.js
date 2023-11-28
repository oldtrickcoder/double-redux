import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import SecondSlices from "../features/SecondSlices/SecondSlices";
export default configureStore({
  reducer: {
    counter: counterReducer,
    secondCounter: SecondSlices,
  },
});
