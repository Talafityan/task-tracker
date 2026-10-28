import { useState } from "react";
import type { Task, Priority } from "./types";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Finish Git task", priority: "high", done: true },
    { id: 2, title: "Learn useState", priority: "medium", done: false },
    { id: 3, title: "Read React docs", priority: "low", done: false },
  ]);

  function addTask(title: string, priority: Priority) {
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;