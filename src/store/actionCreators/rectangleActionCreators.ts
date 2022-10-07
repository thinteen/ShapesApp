export function createRectangle(width: number, height: number) {
  return {
    type: "CREATE_RECTANGLE",
    x: width / 2,
    y: height / 2,
  }
}