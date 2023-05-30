import { IModalProps } from "../../../interfaces/IModalProps";
import { Button } from "../button/Button";
import styles from './Modal.module.scss'
import ReactDOM from 'react-dom';


const Backdrop= (props:IModalProps)=>{
    return (
        <div onClick={props.OnDismiss} className={styles.backdrop}>
        </div>
        )
};

const Overlay= (props:IModalProps)=>{
    console.log(props)
    return (
        <div className={styles.modal}>
            <p className={styles.title}>{props.Title}</p>
            <p>{props.Message}</p>
            <Button Type="button" className={styles.button} Method={props.OnDismiss}>Ok</Button>
        </div>
        )
};

export const Modal = (props:IModalProps) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop OnDismiss={props.OnDismiss}/>, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Overlay Title={props.Title} Message={props.Message} OnDismiss={props.OnDismiss} />, document.getElementById('overlay-root') as HTMLElement)}
        </>
  )
}
