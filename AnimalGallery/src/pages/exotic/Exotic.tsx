import { Divider } from "../../components/UI/divider/Divider";
import Animals from "../../data/Animals.json";
import DummyText from "../../data/DummyText.json";
import styles from "../ImgGalleryStyling.module.scss";
import heroImg from "../../shared/img/exotic_hero.jpg";
import { TextBlock } from "../../components/UI/textBlock/TextBlock";

export const Exotic = () => {
  const exoticAnimals=Animals.filter(animal =>{
    return animal.Category==="Exotic";
  })

  return (
    <>
      <div className={styles.galleryWrapper}>
        <main className={styles.hero}>
          <img className={`${styles.heroImg} ${styles.exotic}`} src={heroImg} alt="Majestic lion" />
        </main>
        <TextBlock className={styles.textBlock} Heading={DummyText.DummyHeading1} Text={DummyText.DummyText100}/>
        {exoticAnimals.map((animal, index)=>
        <>
        <div className={index%2==0?styles.animalItem: `${styles.animalItem} ${styles.reverse}`} key={index}>
          <img className={styles.animalItemImg} src={animal.ImgSource} alt={animal.ImgAltText}/>
          <p className={styles.animalText}>{DummyText.DummyText50}</p>
        </div>
        {index!=exoticAnimals.length-1&&
          <Divider/>
        }
        </>
        )
      }
    </div>
    </>
  )
}
