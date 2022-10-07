import { createGUID } from "../../utils/guid";
import { isSelectedBlock, setComponentFields } from "../../utils/shapeList";
import { Shape, ShapeTypes } from "../types";

export function listShape(listShape: Shape[], action: any): Shape[] {
  switch (action.type) {
    case "CREATE_TRIANGLE":
      return [
        ...listShape,
        {
          guid: createGUID(),
          type: ShapeTypes.triangle,
          side: 75,
          base: 75,
          position: {
            x: action.x,
            y: action.y,
          },
          backgroungColor: "#000",
        }
      ];

    case "CREATE_RECTANGLE":
      return [
        ...listShape,
        {
          guid: createGUID(),
          type: ShapeTypes.rectangle,
          width: 300,
          height: 70,
          position: {
            x: action.x,
            y: action.y,
          },
          backgroungColor: "#000",
        }
      ];

    case "SET_POSITION":
      return setComponentFields(listShape, action.id, {
        position: {
          x: action.x,
          y: action.y,
        }
      });

    case "SET_COLOR_SHAPE":
      {
        return setComponentFields(listShape, action.id, {
          backgroungColor: action.backgroungColor,
        });
      }

    case "DELETE_SHAPE":
      const copyListBlock: Shape[] = [...listShape];
      if (isSelectedBlock(action.guid)) {
        copyListBlock.forEach((component, index) => {
          if (component.guid === action.guid) {
            copyListBlock.splice(index, 1);
            return false;
          }
        });
      }
      return copyListBlock;

    default:
      return listShape;
  }
}