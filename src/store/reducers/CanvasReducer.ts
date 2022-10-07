import { Canvas} from "../types";
import {listShape} from "./ListShapeReducer"

export default function canvas(canvas: Canvas, action: any): Canvas {
  return {
    listShape: listShape(canvas.listShape, action),
  };
}
