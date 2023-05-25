import styles from "./HeadingBlock.module.scss"

export const HeadingBlock = (props:any) => {
  const classes= `${styles.headingBlockContainer} ${props.className}`;
  return (
    <div className={classes}>
        <p>{props.text}</p>
    </div>
  )
}
