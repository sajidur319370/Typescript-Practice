import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./starter/09-rtk/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
