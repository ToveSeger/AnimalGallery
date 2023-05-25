import { IProfileCard } from '../../../interfaces/IProfileCard';
import { Card } from '../card/Card';
import styles from "./ProfileCard.module.scss";

export const ProfileCard = (props:IProfileCard) => {
  return (
        <Card className={styles.profileCard}>
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
