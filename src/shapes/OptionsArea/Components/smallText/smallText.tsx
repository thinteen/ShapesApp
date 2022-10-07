import style from './smallText.module.css';

type TextProps = {
  text: string,
}

function smallText(props: TextProps) {
  return (
    <span className={style.smallText}>{props.text}</span>
  );
}

export default smallText;