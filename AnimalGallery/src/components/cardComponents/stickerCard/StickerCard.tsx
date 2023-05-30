import { IStickerCard } from '../../../interfaces/IStickerCard';
import styles from './ClickableCard.module.scss'

//Not used atm, saved for eventual use case
export const ClickableCard = (props:IStickerCard) => {
  const stickerPosition=()=>{
    if(props.stickerPosition==="right"){
      return styles.right;
    }
    if(props.stickerPosition==="left"){
      return styles.left;
    }
    if(props.stickerPosition==="center"){
      return styles.center;
    }
  }
  const classes=`${styles.sticker} ${stickerPosition()}`;
  return (
    <a className={styles.card} href={props.href}>
        <p>
            {props.Text}
        </p>
        <section className={classes} style={{color:props.StickerColor}}>
          {props.Sticker}
        </section>
    </a>
  )
}
