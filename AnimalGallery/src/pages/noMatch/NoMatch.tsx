import styles from "./NoMatch.module.scss";
import {FaRegSadTear} from "react-icons/fa";

export const NoMatch = () => {
  return (
    <div className={styles.noMatch}>
      <section className={styles.textBlock}>
        <p>Oops!</p>
        <p>Didn't find anything here I'm afraid...</p>
      </section>
      <FaRegSadTear/>
    </div>
  )
}
