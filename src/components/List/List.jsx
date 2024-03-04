import React from "react";
import styles from "./List.module.scss";

export default function List({ tasks, onCheckTask, onEditTask, onDeleteTask }) {
  return (
    <ul className={styles.list}>
      {tasks
        .slice()
        .sort((a, b) => {
          if (a.completed && !b.completed) {
            return 1;
          } else if (!a.completed && b.completed) {
            return -1;
          }
          return 0;
        })
        .map((task) => (
          <li
            key={task.id}
            className={`${styles.item} ${task.completed && styles.completed}`}
          >
            <button
              className={styles.check}
              aria-label="Check"
              onClick={() => onCheckTask(task.id)}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <span className={styles.task}>{task.text}</span>
            <button
              className={styles.edit}
              aria-label="Edit"
              onClick={() =>
                onEditTask(task.id, prompt("Edit task...", task.text))
              }
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className={styles.delete}
              aria-label="Delete"
              onClick={() => onDeleteTask(task.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
    </ul>
  );
}
