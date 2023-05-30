import { ICard } from '../../../interfaces/ICard';
import styles from './Card.module.scss'

export const Card = (props:ICard) => {
    const classes= `${styles.cardContainer} ${props.className}`;
  return (
    <a href={props.href}>
      <div className={classes}>
          {props.children}
      </div>
    </a>
  )
}
