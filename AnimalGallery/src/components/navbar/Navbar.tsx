import styles from "./Navbar.module.scss";
import logo from "../../shared/img/logo.png";
import {BsFillCameraFill} from "react-icons/bs";
import { useState } from "react";
import { Drawer } from "../drawer/Drawer";
export const Navbar = (props:any) => {
  const [menuisOpen, setMenuIsOpen]=useState(false);
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <section className={styles.camera}><BsFillCameraFill/></section>
        <p>Animal Gallery</p>
      </a>
        <button className={styles.menu} onClick={()=>setMenuIsOpen(true)}>Menu</button>
        {menuisOpen&&
          <Drawer Dismiss={()=>setMenuIsOpen(false)}/>
        }
    </div>
  )
}
