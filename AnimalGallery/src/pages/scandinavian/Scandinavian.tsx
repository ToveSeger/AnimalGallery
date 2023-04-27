import { Divider } from "../../components/UI/divider/Divider";
import { Navbar } from "../../components/navbar/Navbar";
import Animals from "../../data/Animals.json";
import DummyText from "../../data/DummyText.json";
import styles from "../ImgGalleryStyling.module.scss";
import heroImg from "../../shared/img/scandinavian_hero.jpg";
import { TextBlock } from "../../components/UI/textBlock/TextBlock";

export const Scandinavian = () => {
  const scandinavianAnimals=Animals.filter(animal =>{
    return animal.Category==="Scandinavian";
  })

  return (
    <>
      <div className={styles.galleryWrapper}>
        <main className={styles.hero}>
          <img className={`${styles.heroImg} ${styles.scandinavian}`} src={heroImg} alt="Raindeers" />
        </main>
        <TextBlock className={styles.textBlock} Heading={DummyText.DummyHeading1} Text={DummyText.DummyText100}/>
        {scandinavianAnimals.map((animal, index)=>
        <>
        <div className={index%2==0?styles.animalItem: `${styles.animalItem} ${styles.reverse}`} key={index}>
          <img className={styles.animalItemImg} src={animal.ImgSource} alt={animal.ImgAltText}/>
          <p className={styles.animalText}>{DummyText.DummyText50}</p>
        </div>
        {index!=scandinavianAnimals.length-1&&
          <Divider/>
        }
        </>
        )
      }
    </div>
    </>
  )
}
