import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Main.module.scss";

export default function Main() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const checkTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main className={styles.main}>
      <Form onAddTask={addTask} />
      <List
        tasks={tasks}
        onCheckTask={checkTask}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}
