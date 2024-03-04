import React, { useState } from "react";
import styles from "./Form.module.scss";

export default function Form({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="input"
        type="text"
        placeholder="Add task..."
        value={taskText}
        onChange={handleInputChange}
      ></input>
      <button className={styles.button} aria-label="Add" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}
