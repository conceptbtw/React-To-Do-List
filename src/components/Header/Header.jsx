import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>📝 To-Do List</h1>
      </nav>
    </header>
  );
}
