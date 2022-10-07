import { store } from "../store";

export function setPosition(x: number, y: number) {
  return {
    type: "SET_POSITION",
    id: store.getState().selectBlock,
    x: x,
    y: y,
  }
}