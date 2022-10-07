import { createStore, Store } from "redux";
import { initialState } from "./initialState";
import { shapesAppReducer } from "./reducers/ShapesAppReducer";
import { ShapesApp } from "./types";

export const store: Store<ShapesApp> = createStore(
  shapesAppReducer,
  initialState,
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch