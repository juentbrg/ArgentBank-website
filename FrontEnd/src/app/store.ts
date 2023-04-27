import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "../reducers/userReducer"

const rootReducer = combineReducers({
  auth: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;