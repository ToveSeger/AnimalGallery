import { IProfileCard } from '../../interfaces/IProfileCard';
import { Card } from '../card/Card';
import styles from "./ProfileCard.module.scss";

export const ProfileCard = (props:IProfileCard) => {
  return (
        <Card className={styles.profileCard}>
            <img src={props.ImgPath} alt={props.ImgAltText}/>
            <section className={styles.textSection}>
                <p className={styles.Name}>{props.Name}</p>
                <p>{props.Text}</p>
            </section>
        </Card>
  )
}
