import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../icecream/iceSlice";

const initialState = {
  numOfCakes: 10,
};
export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    cordered: (state, action) => {
      state.numOfCakes--;
      // console.log("-----------",state.numOfCakes)
    },
    crestocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  extraReducers:(builder) =>{
    builder.addCase(ordered,state=>{
        state.numOfCakes--
    })
}
});
export const { cordered, crestocked } = cakeSlice.actions;
export default cakeSlice.reducer;
