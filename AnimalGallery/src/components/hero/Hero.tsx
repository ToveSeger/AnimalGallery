import styles from "./Hero.module.scss";
export const Hero = (props:any) => {
    const classes= `${styles.heroImg} ${props.className}`;

  return (
    <main className={styles.hero}>
        <img className={classes} src={props.heroImg} alt={props.altText} />
    </main>
  )
}
