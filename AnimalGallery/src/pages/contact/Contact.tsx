import styles from "./Contact.module.scss";
import heroImg from "../../shared/img/contact_hero.jpg";
import { TextBlock } from "../../components/UI/textBlock/TextBlock";
import DummyText from "../../data/DummyText.json";
import { Card } from "../../components/card/Card";
import { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const Contact = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");

    const sendMessage=()=>{

    }

  return (
    <div className={styles.contact}>
        <main className={styles.hero}>
          <img className={`${styles.heroImg} ${styles.scandinavian}`} src={heroImg} alt="Black and brown rotary phone" />
        </main>
        <ContactForm/>
    </div>
  )
}
