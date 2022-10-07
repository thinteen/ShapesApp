import { ShapesApp, ViewModel } from "../../types";

export type ShapeAction = {
  type: "UNDO",
} | {
  type: "REDO"
} | {
  type: "DELETE_BLOCK"
} | {
  type: "INPUT_COLOR_SHAPE",
  backgroungColor: string,
} | {
  type: "SET_COLOR_SHAPE",
  backgroungColor: null | string,
}
export default function viewModel(shapesApp: ShapesApp, action: ShapeAction): ViewModel {

  switch (action.type) {

    case "INPUT_COLOR_SHAPE":
      return {
        ...shapesApp.viewModel,
        backgroungColor: action.backgroungColor
      };

      case "SET_COLOR_SHAPE":
        return {
          ...shapesApp.viewModel,
          backgroungColor: null
        }

    default:
      return shapesApp.viewModel
  }
}