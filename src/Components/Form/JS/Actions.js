import React from "react";
import styles from "../CSS/Actions.module.css"
const Actions =(props)=>{
    return <p className={styles.actions}>
    <button type="reset" className={styles.buttonAlt} onClick={props.clickHandler}>
      Reset
    </button>
    <button type="submit" className={styles.button}>
      Calculate
    </button>
  </p>
}
export default Actions;