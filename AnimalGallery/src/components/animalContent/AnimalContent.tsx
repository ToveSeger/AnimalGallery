import styles from './AnimalContent.module.scss'
import { Card } from '../card/Card'
import { IAnimal } from './IAnimal'

export const AnimalContent = (props:any) => {
  const classes= `${styles.animalContentContainer} ${props.className}`;

  return (
    <div className={classes}>
    {props.animalList.map((animal:IAnimal)=>
        <Card className={styles.card}>
            <p>{animal.AnimalName}</p>
            <img className={styles.cardImg} src={animal.ImgSource}/>
        </Card>
    )}
    </div>
  )
}
