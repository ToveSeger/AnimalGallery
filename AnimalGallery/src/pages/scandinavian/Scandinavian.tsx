import { Divider } from "../../components/UI/divider/Divider";
import Animals from "../../data/Animals.json";
import DummyText from "../../data/DummyText.json";
import styles from "../ImgGalleryStyling.module.scss";
import heroImg from "../../shared/img/scandinavian_hero.jpg";
import { TextBlock } from "../../components/textComponents/textBlock/TextBlock";
import { Hero } from "../../components/hero/Hero";

export const Scandinavian = () => {
  const scandinavianAnimals=Animals.filter(animal =>{
    return animal.Category==="Scandinavian";
  })

  return (
    <>
      <div className={styles.galleryWrapper}>
        <Hero className={styles.scandinavianHeroImg} HeroImg={heroImg} AltText={"Raindeers"} />
        <TextBlock className={styles.textBlock} Heading={DummyText.DummyHeading1} Text={DummyText.DummyText100}/>
        <div className={styles.animalItemContainer}>
          {scandinavianAnimals.map((animal, index)=>
          <>
          <div className={index%2===0?styles.animalItem: `${styles.animalItem} ${styles.reverse}`} key={index}>
            <img className={styles.animalItemImg} src={animal.ImgSource} alt={animal.ImgAltText}/>
            <p className={styles.animalText}>{DummyText.DummyText50}</p>
          </div>
          {index!==scandinavianAnimals.length-1&&
            <Divider/>
          }
          </>
          )
        }
      </div>
    </div>
    </>
  )
}
