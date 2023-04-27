import styles from "./Drawer.module.scss";
import {RxCross2} from "react-icons/rx";
import {GiSnailEyes} from "react-icons/gi";

export const Drawer = (props:any) => {
  return (
    <div className={styles.drawerContainer}>
        <a className={styles.dismissButton} onClick={props.Dismiss}>
            <RxCross2/>
        </a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
        <section className={styles.snailEyes}>
            <GiSnailEyes/>
        </section>
    </div>
  )
}