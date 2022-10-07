import SmallText from '../Components/smallText/smallText';
import Text from '../Components/text/text';
import ColorPicker from './ColorPicker';
import style from './ColorSelection.module.css';

export default function ColorSelection() {
  return (
    <div className={style.colorSelection}>
      <Text text='Style' />
      <div className={style.colorSelectionArea}>
        <SmallText text='Fill' />
        <ColorPicker/>
      </div>
      {/* создаем реф колорпикера и передаем его в хук
      в хуке при инпуте цвет передается во вьюмодел */}
    </div>
  )
}