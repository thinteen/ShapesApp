import { Canvas, HistoryChanges, ShapesApp,  ViewModel } from "./types"

const canvas: Canvas = {
  listShape: [],
}

const history: HistoryChanges = {
  listState: [canvas],
  currentIndex: 0,
}

const viewModel: ViewModel = {
  backgroungColor: null,
}

export const initialState: ShapesApp = {
  history: history,
  canvas: canvas,
  selectBlock: null,
  viewModel: viewModel,
}
