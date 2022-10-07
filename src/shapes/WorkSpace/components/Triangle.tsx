import { useRef } from 'react';
import { connect } from 'react-redux';
import { resetSelectedBlock, setSelectedBlock } from '../../../store/actionCreators/selectActionCreators';
import { setPosition } from '../../../store/actionCreators/setPositionActionCreator';
import { AppDispatch, RootState, store } from '../../../store/store';
import { Shape } from '../../../store/types';
import { useDragAndDrop } from '../useDragAndDrop';
import { useSelect } from '../useSelect';
import style from '../WorkSpace.module.css';

type TriangleProps = {
  shape: Shape,
  setPosition: (x: number, y: number) => void,
  setSelectedBlock: (guid: string) => void,
  resetSelectedBlock: () => void,
  selectedGuid: null | string,
  borderBottomColor: null | string,
}

function Triangle(props: TriangleProps){

  console.log(store.getState())

  const shape: Shape = props.shape;

  const refShape = useRef<HTMLDivElement>(null);
  useDragAndDrop(refShape, shape.position, props.setPosition);

  useSelect(shape.guid, refShape, props.setSelectedBlock, props.resetSelectedBlock);

  const select: string = props.shape.guid === props.selectedGuid ? style.selectedTriangle : "";

  const styleShape = {
    left: shape.position.x,
    top: shape.position.y,
    borderBottomColor: ((select !== "") && props.borderBottomColor) ? props.borderBottomColor : shape.backgroungColor,
  };

  return(
    <div className={style.triangle} key={shape.guid} style={styleShape} ref={refShape}>
      <div className={select}></div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    selectedGuid: state.selectBlock,
    borderBottomColor: state.viewModel.backgroungColor,
  }
}


const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setPosition: (x: number, y: number) => dispatch(setPosition(x, y)),
    setSelectedBlock: (guid: string) => dispatch(setSelectedBlock(guid)),
    resetSelectedBlock: () => dispatch(resetSelectedBlock()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Triangle);