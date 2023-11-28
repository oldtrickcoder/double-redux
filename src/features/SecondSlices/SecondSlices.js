import { createSlice } from "@reduxjs/toolkit";

export const SecondCounter = createSlice({
  name: "secondCounter",
  initialState: {
    value: 13,
  },
  reducers: {
    incres: (state) => {
      console.log("I am Here");
      state.value += 1;
    },
    decres: (state) => {
      state.value -= 1;
    },
    multiply: (state) => {
      state.value *= 5;
    },
    bagi: (state) => {
      state.value /= 3;
    },
  },
});
export const { incres, decres, multiply, bagi } = SecondCounter.actions;
export default SecondCounter.reducer;
