import { store } from "../store"

export function inputColorShape(color: string) {
  return {
    type: "INPUT_COLOR_SHAPE",
    backgroungColor: color,
  }
}

export function setColorShape(color: string) {
  return {
    type: "SET_COLOR_SHAPE",
    id: store.getState().selectBlock,
    backgroungColor: color,
  }
}