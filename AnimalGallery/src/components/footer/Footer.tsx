import {FaCopyright} from "react-icons/fa"
import {ImLinkedin, ImFacebook2, ImInstagram} from "react-icons/im"
import styles from "./Footer.module.scss";
import DummyText from "../../data/DummyText.json";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <section className={styles.companyDescription}>
          <p className={styles.companyName}>Animal Gallery <FaCopyright/></p>
          <p>{DummyText.DummyText20}</p>
        </section>
        <section className={styles.address}>
          <p>Animal Gallery</p>
          <p>Teststreet 1</p>
          <p>Brooklyn</p>
        </section>
        <section className={styles.contact}>
          <p>+1 718 235 123</p>
          <p>hi@animalgallery.com</p>
          <div className={styles.footerLogos}>
            <ImLinkedin/>
            <ImFacebook2/>
            <ImInstagram/>
          </div>
        </section>
      </div>
    </footer>
  )
}
