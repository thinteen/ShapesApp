export function createTriangle(width: number, height: number) {
  return {
    type: "CREATE_TRIANGLE",
    x: width / 2,
    y: height / 2,
  }
}

