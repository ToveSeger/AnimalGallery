import IHero from "../../interfaces/IHero";
import styles from "./Hero.module.scss";
export const Hero = (props:IHero) => {
    const classes= `${styles.heroImg} ${props.className}`;

  return (
    <main className={styles.hero}>
        <img className={classes} src={props.HeroImg} alt={props.AltText} />
    </main>
  )
}
