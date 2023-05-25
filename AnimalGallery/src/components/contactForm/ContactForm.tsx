import { useState } from "react";
import styles from "./ContactForm.module.scss";
import {Modal} from "../UI/modal/Modal";
import Topics from "../../data/Topics.json";
import { Button } from "../UI/button/Button";

export const ContactForm = (props:any) => {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [errorsExist, setErrorsExist]=useState(false);
    const [topic, setTopic]=useState("");
    const [isValidFirstName, setIsValidFirstName]=useState(true);
    const [isValidLastName, setIsValidLastName]=useState(true);
    const [isValidEmail, setIsValidEmail]=useState(true);
    const [isValidTopic, setIsValidTopic]=useState(true);
    const [isValidMessage, setIsValidMessage]=useState(true);

  const nullCheck=(e:any)=>{
    e.preventDefault();
    let error=false;

    if(firstName.length===0){
      setIsValidFirstName(false);
      error=true;
    }
    if(lastName.length===0){
      setIsValidLastName(false);
      error=true;
    }
    if(email.length===6 || !email.includes("@")){
      console.log(!email.includes("@"))
      setIsValidEmail(false);
      error=true;
      console.log(error)
    }
    if (topic.length===0){
      setIsValidTopic(false);
      error=true;

    }
    if (message.length===0){
      setIsValidMessage(false);
      error=true;

    }
    if(!error){
      setFirstName("");
      setLastName("");
      setEmail("");
      setTopic("");
      setMessage("");
      props.submitMessage();
    }
    setErrorsExist(error);
  }


  const toggleModalVisibility=()=>{
    setErrorsExist(false);
  }

  const inputHandler=(e:any)=>{
    console.log(e.target.id)
    if(e.target.id==="firstName"){
      setFirstName(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidFirstName(false):setIsValidFirstName(true);
    }
    if(e.target.id==="lastName"){
      setLastName(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidLastName(false):setIsValidLastName(true);
    }
    if(e.target.id==="email"){
      setEmail(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidEmail(false):setIsValidEmail(true);
    }
    if(e.target.id==="topic"){
      setTopic(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidTopic(false):setIsValidTopic(true);
    }
    if(e.target.id==="message"){
      setMessage(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidMessage(false):setIsValidMessage(true);
    }
  }

  return (
    <div className={styles.formContainer}>
    <form className={styles.form} onSubmit={nullCheck}>
      <div className={styles.formItemContainer}>
        <div className={styles.formItem}>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" className={isValidFirstName?"":styles.invalidInput} value={firstName} onChange={e=>inputHandler(e)}/>
        </div>
          {errorsExist&&
            <Modal Title="Oops!" Message="Du har glömt att fylla i ett eller flera fält" OnDismiss={toggleModalVisibility}/>
          }
        <div className={styles.formItem}>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" className={isValidLastName?"":styles.invalidInput}type="text" value={lastName} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input id="email" className={isValidEmail?"":styles.invalidInput} type="text" value={email} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="topic">What's it about?</label>
            <select className={isValidTopic?"":styles.invalidInput} id="topic" onChange={e=>inputHandler(e)} value={topic}>
              {Topics.topics.map((topic:any, index:any)=>
                  <option key={index} value={topic}>{topic}</option>
              )
            }
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="message">Message</label>
          <textarea id="message" className={isValidMessage?styles.note: `${styles.note} ${styles.invalidInput}`} value={message} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.submitButtonContainer}>
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
    </div>
  )
}
