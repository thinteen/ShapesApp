import { ReactElement} from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Shape, ShapeTypes } from '../../store/types';
import style from './WorkSpace.module.css';
import Triangle from './components/Triangle';
import Rectangle from './components/Rectangle';
import { useDelete } from './useDelete';
import { deleteShape } from '../../store/actionCreators/deleteActionCreator';

type WorkSpacePrors = {
  listShape: Shape[],
  deleteShape: () => {},
}

function WorkSpace(props: WorkSpacePrors) {
  
  useDelete(props.deleteShape);

  let newListShape: ReactElement[] = [];

  props.listShape.forEach((shape: Shape) => {
    
    switch (shape.type) {
      case ShapeTypes.triangle: 
      {
        newListShape.push(
          <Triangle shape={shape} key={shape.guid}/>
        );
          break;
      }

      case ShapeTypes.rectangle:
      {
        newListShape.push(
          <Rectangle shape={shape} key={shape.guid}/>
        );
          break;
      }
    }
  });

  return (
    <div className={style.workSpace}>
      {newListShape}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    listShape: state.canvas.listShape,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteShape: () => dispatch(deleteShape()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpace);