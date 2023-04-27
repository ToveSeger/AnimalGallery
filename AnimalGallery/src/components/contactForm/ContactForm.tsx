import { useState } from "react";
import styles from "./ContactForm.module.scss";
import { IMessage } from "../../interfaces/IMessage";
import {Modal} from "../UI/modal/Modal";
import Topics from "../../data/Topics.json";
import { Button } from "../UI/button/Button";

export const ContactForm = (props:any) => {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [isValidName, setIsValidName]=useState(true);
    const [topic, setTopic]=useState("");

    const addToGroceryList=(e:any)=>{
      e.preventDefault();
      const reqDataFilled=nullCheck();
      if(reqDataFilled){
        const itemToAdd:IMessage={
            Id:Math.floor(Math.random() * 100).toString(),
            FirstName:firstName,
            LastName: lastName,
            Email:email,
            Message:message
        }
        props.onAddItem(itemToAdd);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }
  }

  const nullCheck=()=>{
    const nameIsFilled= firstName.length>0;
  setIsValidName(nameIsFilled);
  return nameIsFilled;
  }

  const toggleModalVisibility=()=>{
    setIsValidName(true);
  }

  const submitMessage=(e:any)=>{
    e.preventDefault();
    console.log(message);
  }

  return (
    <form className={styles.form} onSubmit={submitMessage}>
      <div className={styles.formItemContainer}>
        <div className={styles.formItem}>
          <label htmlFor="Name">First name</label>
          <input id="Name" className={isValidName?"":styles.invalidInput} value={firstName} onChange={e=>setFirstName(e.target.value.trim())}/>
        </div>
          {!isValidName&&
            <Modal Title="Oops!" Message="Glömde du fylla i ett namn?" onDismiss={toggleModalVisibility}/>
          }
        <div className={styles.formItem}>
          <label htmlFor="Last name">Last name</label>
          <input id="Amount" type="number" value={lastName} onChange={e=>setLastName(e.target.value)}/>
        </div>
        <div  className={styles.formItem}>
          <label htmlFor="Topic">What's it about?</label>
            <select id="Topic" onChange={e=>setTopic(e.target.value)} value={topic}>
              {Topics.topics.map((topic:any, index:any)=>
                  <option key={index} value={topic}>{topic}</option>
              )
            }
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="Message">Message</label>
          <input className={styles.note} id="Message" type="text" value={message} onChange={e=>setMessage(e.target.value)}/>
        </div>
      </div>
        <Button className={styles.submitButton} type="submit">Send</Button>
    </form>
  )
}
