import { ShapesApp } from "../types";
import canvas from "./CanvasReducer";
import viewModel from "./ViewModel/ViewModelReducer";

export function shapesAppReducer(shapesApp = {} as ShapesApp, action: any): ShapesApp {

  switch (action.type) {
    case "SET_SELECTED_BLOCK":
      return {
        ...shapesApp,
        selectBlock: action.guid,
      };
  
    case "RESET_SELECTED_BLOCK":
      return {
        ...shapesApp,
        selectBlock: null,
      };
      
    default:
      return {
        ...shapesApp,
        canvas: canvas(shapesApp.canvas, action),
        viewModel: viewModel(shapesApp, action),
      };
  }
}