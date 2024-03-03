import React from "react";
import styles from "./Form.module.scss";

export default function Form() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text"></input>
      <button className={styles.button} type="submit"></button>
    </form>
  );
}
