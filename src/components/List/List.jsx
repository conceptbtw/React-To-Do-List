import React from "react";
import styles from "./List.module.scss";

export default function List() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.check}>
          <i className="fa-solid fa-check"></i>
        </button>
        <span className={styles.task}>Task</span>
        <button className={styles.edit}>
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className={styles.delete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    </ul>
  );
}
