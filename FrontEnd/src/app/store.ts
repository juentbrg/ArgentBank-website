import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  },
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;