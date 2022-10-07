export function setSelectedBlock(guid: string) {
  return {
    type: "SET_SELECTED_BLOCK",
    guid: guid,
  }
}

export function resetSelectedBlock() {
  return {
    type: "RESET_SELECTED_BLOCK",
  }
}