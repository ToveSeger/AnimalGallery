import { TextBlock } from "../../components/UI/textBlock/TextBlock";
import styles from "./About.module.scss";
import DummyText from "../../data/DummyText.json";
import Profiles from "../../data/Profiles.json";
import {ProfileCard} from "../../components/profileCard/ProfileCard";
import heroImg from "../../shared/img/about_hero.jpg";

export const About = () => {
  return (
    <div className={styles.about}>
      <main className={styles.hero}>
          <img className={`${styles.heroImg} ${styles.exotic}`} src={heroImg} alt="Majestic lion" />
        </main>
      <TextBlock className={styles.textBlock} Heading={DummyText.DummyHeading1} Text={DummyText.DummyText100}/>
      {Profiles.map((profile, index)=>
          <ProfileCard Name={profile.Name} ImgPath={profile.ImgPath} ImgAltText={profile.ImgAltText} Text={profile.Text}/>
      )
      }
    </div>
  )
}
