import IButton from "../../../interfaces/IButton";
import styles from "./Button.module.scss"

export const Button = (props:IButton) => {
  const classes=`${props.className} ${styles.button}`;
  return (
    <button className={classes} type={props.Type} onClick={props.Method}>{props.children}</button>
  )
}
