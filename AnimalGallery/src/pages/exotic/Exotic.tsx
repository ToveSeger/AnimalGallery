import Animals from "../../data/Animals.json";
import styles from "../ImgGalleryStyling.module.scss";

export const Exotic = () => {

  const exoticAnimals=Animals.filter(animal =>{
    return animal.Category==="Exotic";
  })

  return (
    <div className={styles.galleryWrapper}>
      {exoticAnimals.map((animal)=>
        <img src={animal.ImgSource} alt={animal.ImgAltText} />
      )
      }
    </div>
  )
}
