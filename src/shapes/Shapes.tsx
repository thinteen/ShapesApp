import OptionsArea from './OptionsArea/OptionsArea';
import style from './Shapes.module.css';
import WorkSpace from './workSpace/WorkSpace';

function Shapes() {
  return (
    <div className={style.menu}>
      <OptionsArea/>
      <WorkSpace/>
    </div>
  );
}

export default Shapes;