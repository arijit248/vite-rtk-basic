import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "../containers/count/countSlice";
export const store = configureStore({
  reducer: { count: CountSlice },
});
