import { Divider } from "../../components/UI/divider/Divider";
import { Navbar } from "../../components/navbar/Navbar";
import Animals from "../../data/Animals.json";
import styles from "../ImgGalleryStyling.module.scss";

export const Scandinavian = () => {
  const scandinavianAnimals=Animals.filter(animal =>{
    return animal.Category==="Scandinavian";
  })

  return (
    <>
    <Navbar/>
      <div className={styles.galleryWrapper}>
        {scandinavianAnimals.map((animal, index)=>
        <>
        <div className={index%2==0?styles.animalItem: `${styles.animalItem} ${styles.reverse}`} key={index}>
          <img src={animal.ImgSource} alt={animal.ImgAltText}/>
          <p className={styles.animalText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita ipsa totam eveniet exercitationem aspernatur blanditiis
            deserunt voluptatem nihil error velit, hic nisi enim distinctio optio
            incidunt debitis ipsam quidem, esse accusamus eaque dolores iste?
            Cupiditate omnis quidem enim dolorum assumenda
            incidunt minus necessitatibus hic quod sunt neque, iure nemo iste?
          </p>
        </div>
        <Divider/>
        </>
        )
      }
    </div>
    </>
  )
}
