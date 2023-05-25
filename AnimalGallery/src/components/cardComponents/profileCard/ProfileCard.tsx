import { IProfileCard } from '../../../interfaces/IProfileCard';
import { Card } from '../card/Card';
import styles from "./ProfileCard.module.scss";

export const ProfileCard = (props:IProfileCard) => {
  const classes=`${styles.profileCard} ${props.className}`;

  return (
        <Card className={classes}>
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
