export enum ShapeTypes {
  triangle,
  rectangle,
}


export type Position = Readonly<{
  x: number,
  y: number,
}>

export type Triangle = Readonly<{
  guid: string,
  type: ShapeTypes.triangle,
  side: number,
  base: number,
  position: Position,
  backgroungColor: string,
}>

export type Rectangle = Readonly<{
  guid: string,
  type: ShapeTypes.rectangle,
  width: number,
  height: number,
  position: Position,
  backgroungColor: string,
}>

export type Shape = Readonly<(Rectangle | Triangle)>;

export type HistoryChanges = Readonly<{
  listState: Array<Canvas>,
  currentIndex: number,
}>

export type Canvas = Readonly<{
  listShape: Array<Shape>,
}>

export type ViewModel = Readonly<{
  backgroungColor: null | string,
}>

export type ShapesApp = Readonly<{
  history: HistoryChanges,
  canvas: Canvas,
  selectBlock: null | string,
  viewModel: ViewModel,
}>