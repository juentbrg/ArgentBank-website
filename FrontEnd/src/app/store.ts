import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";
import userNameSlice from "../features/userNameSlice";
import signSlice from "../features/signSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    userName: userNameSlice,
    sign: signSlice
  },
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;