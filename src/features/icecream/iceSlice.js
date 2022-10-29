import { createSlice } from "@reduxjs/toolkit";
// import cakeSlice from "../cake/cakeSlice";
import { cordered } from "../cake/cakeSlice";

const initialState = {
  numOfIce: 20,
};
export const iceSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIce--;
    },
    restocked: (state, action) => {
      state.numOfIce += action.payload;
    },
  },
//   extraReducers: (builder) =>{
//     builder.addCase(cakeSlice.ordered,state=>{
//         state.numOfIce--
//     })
//   }

extraReducers:(builder) =>{
    builder.addCase(cordered,state=>{
        state.numOfIce--
    })
}
});
export const { ordered, restocked } = iceSlice.actions;
export default iceSlice.reducer;
