import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import iceReducer from "./features/icecream/iceSlice"
import userReducer from "./features/users/userSlice"
export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream:iceReducer,
    user:userReducer
  },
});

export default store;
