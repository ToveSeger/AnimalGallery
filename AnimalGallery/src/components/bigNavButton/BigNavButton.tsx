import styles from './BigNavButton.module.scss'

export const BigNavButton = (props:any) => {
  return (
    <a className={styles.btn} href={props.NavLink}>
        <p>
            {props.ButtonText}
        </p>
    </a>
  )
}
