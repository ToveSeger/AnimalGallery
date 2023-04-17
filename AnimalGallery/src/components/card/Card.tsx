import styles from './Card.module.scss'
export const Card = (props:any) => {
    const classes= `${styles.cardContainer} ${props.className}`;
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}
