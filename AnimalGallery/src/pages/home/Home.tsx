import { ProfileCard } from '../../components/cardComponents/profileCard/ProfileCard';
import styles from './Home.module.scss'
import lion from '../../shared/img/lion.jpg';
import fox from '../../shared/img/fox.jpg';

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeContentContainer}>
            <ProfileCard className={styles.card} Name={"Exotic Animals Gallery"} ImgPath={lion} ImgAltText={"Lion looking up"}/>
            <ProfileCard className={styles.card} Name={"Scandinavian Animals Gallery"} ImgPath={fox} ImgAltText={"Curious fox"}/>
        </div>   
      </div>
    </>
  )
}
