import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware, Epic } from "redux-observable";
import counterReducer from "./Counter";

const reducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducer>;

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    epicMiddleware,
  ],
});

export type AppEpic = Epic<AnyAction, AnyAction, RootState>;

export default store;

export type AppDispatch = typeof store.dispatch;
