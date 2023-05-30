import { TextBlock } from "../../components/textComponents/textBlock/TextBlock";
import styles from "./About.module.scss";
import DummyText from "../../data/DummyText.json";
import Profiles from "../../data/Profiles.json";
import {InfoCard} from "../../components/cardComponents/infoCard/InfoCard";
import heroImg from "../../shared/img/about_hero.jpg";
import { Hero } from "../../components/hero/Hero";

export const About = () => {
  return (
    <div className={styles.about}>
      <Hero className={styles.heroImg} HeroImg={heroImg} AltText={"Image saying Passion Led Us Here"}/>
      <TextBlock className={styles.textBlock} Heading={DummyText.DummyHeading1} Text={DummyText.DummyText100}/>
      <div className={styles.profiles}>
        {Profiles.map((profile, index)=>
            <InfoCard Name={profile.Name} ImgPath={profile.ImgPath} ImgAltText={profile.ImgAltText} Text={profile.Text}/>
        )
        }
      </div>
    </div>
  )
}
