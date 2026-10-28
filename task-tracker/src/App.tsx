import { useState } from "react";
import type { Task, Priority } from "./types";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";

type Filter = "all" | "active" | "done";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish Git task",
      priority: "high",
      done: true,
    },
    {
      id: 2,
      title: "Learn useState",
      priority: "medium",
      done: false,
    },
    {
      id: 3,
      title: "Read React docs",
      priority: "low",
      done: false,
    },
  ]);

  const [filter, setFilter] = useState<Filter>("all");

  function addTask(title: string, priority: Priority) {
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const completedCount = tasks.filter(
    (task) => task.done
  ).length;

  return (
    <div>
      <h1>Task Tracker</h1>

      <TaskForm onAdd={addTask} />

      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
      />

      <p>
        Completed: {completedCount} / {tasks.length}
      </p>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;