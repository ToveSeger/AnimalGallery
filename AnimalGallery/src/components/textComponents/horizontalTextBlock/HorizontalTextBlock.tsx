import styles from "./HorizontalTextBlock.module.scss"

export const HorizontalTextBlock = (props:any) => {
  return (
    <div className={styles.textBlockContainer}>
        <p>{props.text}</p>
    </div>
  )
}
