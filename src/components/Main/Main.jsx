import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <Form />
      <List />
    </main>
  );
}
