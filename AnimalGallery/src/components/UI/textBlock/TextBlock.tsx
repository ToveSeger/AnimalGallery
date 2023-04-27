import styles from "./TextBlock.module.scss";
export const TextBlock = (props:any) => {
    const classes=`${styles.textBlock} ${props.className}`;
  return (
    <article className={classes}>
        <h2 className={styles.heading}>{props.Heading}.</h2>
        <p className={styles.paragraph}>{props.Text}</p>
    </article>
  )
}
