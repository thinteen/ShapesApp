import { useRef } from "react";
import { connect } from "react-redux";
import { useSelectColor } from "./useSelectColor";
import { AppDispatch, RootState } from "../../../store/store";
import { inputColorShape, setColorShape } from "../../../store/actionCreators/colorSelectActionCreators";

type ColorPickerProps = {
  setColorShape: (color: string) => void,
  inputColorShape: (color: string) => void,
  color: string | null
}

function ColorPicker(props: ColorPickerProps) {

  const colorPicker = useRef<HTMLInputElement>(null);

  useSelectColor(props.color, colorPicker, props.setColorShape, props.inputColorShape);

  return (
    <input type="color" ref={colorPicker}/>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    color: state.viewModel.backgroungColor,
  }
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setColorShape: (color: string) => dispatch(setColorShape(color)),
    inputColorShape: (color: string) => dispatch(inputColorShape(color)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);