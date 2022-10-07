import ColorSelection from './ColorSelection/ColorSelection';
import style from './OptionsArea.module.css';
import ShapeSelection from './ShapeSelection/ShapeSelection';

function OptionsArea() {
  return (
    <div className={style.optionsArea}>
      <ShapeSelection/>
      <ColorSelection/>
    </div>
  );
}

export default OptionsArea;