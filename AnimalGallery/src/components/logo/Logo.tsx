import styles from "./Logo.module.scss";
import {BsFillCameraFill} from "react-icons/bs";

export const Logo = (props:any) => {

    const classes= `${styles.logo} ${props.className}`;

  return (
    <a href="/" className={classes}>
        <section className={styles.camera}><BsFillCameraFill/></section>
    <p>Animal Gallery</p>
  </a>
  )
}
