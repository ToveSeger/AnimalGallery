import styles from "./Navbar.module.scss";
// import {BsFillCameraFill} from "react-icons/bs";
import { useState } from "react";
import { Drawer } from "../drawer/Drawer";
import { Logo } from "../logo/Logo";
export const Navbar = () => {
  const [menuisOpen, setMenuIsOpen]=useState(false);
  return (
    <div className={styles.navbar}>
      <Logo/>
        <button className={styles.menu} onClick={()=>setMenuIsOpen(true)}>III</button>
        {menuisOpen&&
          <Drawer Dismiss={()=>setMenuIsOpen(false)}/>
        }
    </div>
  )
}
