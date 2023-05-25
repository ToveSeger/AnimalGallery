import styles from './ClickableCard.module.scss'

export const ClickableCard = (props:any) => {
  const stickerPosition=()=>{
    if(props.stickerPosition=="right"){
      return styles.right;
    }
    if(props.stickerPosition=="left"){
      return styles.left;
    }
    if(props.stickerPosition=="center"){
      return styles.center;
    }
  }
  const classes=`${styles.sticker} ${stickerPosition()}`;
  return (
    <a className={styles.card} href={props.Link}>
        <p>
            {props.Text}
        </p>
        <section className={classes} style={{color:props.stickerColor}}>
          {props.sticker}
        </section>
    </a>
  )
}
