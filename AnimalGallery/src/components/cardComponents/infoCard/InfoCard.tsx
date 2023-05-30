import { IInfoCard } from '../../../interfaces/IInfoCard';
import { Card } from '../card/Card';
import styles from "./InfoCard.module.scss";

export const InfoCard = (props:IInfoCard) => {
  const classes=`${styles.infoCard} ${props.className}`;

  return (
        <Card className={classes} href={props.href}>
          <div className={styles.imgWrapper}>
            <img src={props.ImgPath} alt={props.ImgAltText}/>
          </div>
            <section className={styles.textSection}>
                <h2 className={styles.Name}>{props.Name}</h2>
                <p>{props.Text}</p>
            </section>
        </Card>
  )
}
