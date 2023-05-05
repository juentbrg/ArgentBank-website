import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    user: authSlice
  },
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;