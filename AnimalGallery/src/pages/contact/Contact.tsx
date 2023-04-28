import styles from "./Contact.module.scss";
import heroImg from "../../shared/img/contact_hero.jpg";
import { TextBlock } from "../../components/UI/textBlock/TextBlock";
import DummyText from "../../data/DummyText.json";
import { Card } from "../../components/card/Card";
import { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import {IoThumbsUpOutline} from "react-icons/io5"

export const Contact = () => {
    const [showSubmitMessage, setShowSubmitMessage]=useState(false);


  const messageSender=()=>{
    console.log( "i submit message")
     setShowSubmitMessage(true);
   }

  return (
    <div className={styles.contact}>
        <main className={styles.hero}>
          <img className={`${styles.heroImg} ${styles.scandinavian}`} src={heroImg} alt="Black and brown rotary phone" />
        </main>
        {!showSubmitMessage&&
        <>
          <h1 className={styles.heading}>Let's talk!</h1>
          <ContactForm submitMessage={messageSender}/>
        </>
        }
      {showSubmitMessage&&
        <Card className={styles.afterSubmitCard}>
          <p>Thanks!</p>
          <p>We'll get in touch.</p>
          <section className={styles.thumbsUp}>
            <IoThumbsUpOutline/>
          </section>
        </Card>
      }
    </div>
  )
}
