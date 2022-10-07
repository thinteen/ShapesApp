import { store } from "../store";

export function deleteShape() {
  return {
    type: "DELETE_SHAPE",
    guid: store.getState().selectBlock,
  }
}