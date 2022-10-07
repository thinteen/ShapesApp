import { Shape } from "../store/types";

export function setComponentFields(listShape: Shape[], guid: string, modifiableFields: object): Shape[] {
  let newListShape: Shape[] = [];
  listShape.forEach((component: Shape) => {
    if (component.guid === guid) {
      newListShape.push({
        ...component,
        ...modifiableFields,
      });
    } else {
      newListShape.push(component);
    }
  });
  return newListShape;
}

export function getIndexById(listBlock: Shape[], id: string): number {
  let foundIndex: number = -1;
  listBlock.forEach((block: Shape, index: number) => {
    if (block.guid === id) {
      foundIndex = index;
      return;
    }
  });
  return foundIndex;
}

export function isSelectedBlock(id: string | null): boolean {
  return Boolean(id)
}