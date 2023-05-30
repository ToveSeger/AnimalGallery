import { InfoCard } from '../../components/cardComponents/infoCard/InfoCard';
import styles from './Home.module.scss'
import lion from '../../shared/img/lion.jpg';
import fox from '../../shared/img/fox.jpg';

export const Home = () => {
  return (
      <div className={styles.home}>
        <div className={styles.homeContentContainer}>
            <InfoCard href={"/exotic"} className={styles.card} Name={"Exotic"} ImgPath={lion} Text={"A gallery with beautiful scandinavian animals."} ImgAltText={"Lion looking up"}/>
            <InfoCard href={"/scandinavian"} className={styles.card} Name={"Scandinavian"} Text={"A gallery with captivating exotic animals."} ImgPath={fox} ImgAltText={"Curious fox"}/>
        </div>   
      </div>
  )
}
