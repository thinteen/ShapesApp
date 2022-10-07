import style from './ShapeSelection.module.css';
import Text from '../Components/text/text';
import { AppDispatch } from '../../../store/store';
import { createTriangle } from '../../../store/actionCreators/triangleActionCreators';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { useCreateShape } from './useCreateShape';
import { createRectangle } from '../../../store/actionCreators/rectangleActionCreators';

type ShapeSelectionProps = {
  createTriangle: () => void,
  createRectangle: () => void,
}

function ShapeSelection(props: ShapeSelectionProps) {
  
  const buttonTriangle = useRef<HTMLDivElement>(null);
  const buttonRectangle = useRef<HTMLDivElement>(null);

  useCreateShape(buttonTriangle, props.createTriangle);
  useCreateShape(buttonRectangle, props.createRectangle);

  return (
    <div className={style.shapeSelection}>
      <Text text='Shapes' />
      <div className={style.shapesArea}>
        <div className={style.rectangle} ref={buttonRectangle}></div>
        <div className={style.triangle} ref={buttonTriangle}></div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    createTriangle: () => dispatch(createTriangle(800, 600)),
    createRectangle: () => dispatch(createRectangle(1000, 600)),
  }
}

export default connect(null, mapDispatchToProps)(ShapeSelection);