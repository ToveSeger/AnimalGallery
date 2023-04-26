import styles from "./Navbar.module.scss";
import logo from "../../shared/img/animalGalleryLogo.png";
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <a href="/">
            <img className={styles.logo} src={logo}/>
        </a>
    </div>
  )
}
