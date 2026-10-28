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

  // Add a new task
  function addTask(title: string, priority: Priority) {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      priority,
      done: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  // Mark task as done or active
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  // Delete a task
  function deleteTask(id: number) {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  // Count completed tasks
  const completedCount = tasks.filter(
    (task) => task.done
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-600">
          Task Tracker
        </h1>

        <p className="mb-8 text-center text-sm text-gray-500">
          Organize your tasks and stay productive
        </p>

        <div className="mb-6 rounded-xl bg-blue-50 p-4">
          <TaskForm onAdd={addTask} />
        </div>

        <div className="mb-6">
          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
          />
        </div>

        <div className="mb-5 rounded-lg bg-slate-50 p-3 text-center">
          <p className="font-semibold text-slate-700">
            {completedCount} of {tasks.length} tasks done
          </p>
        </div>

        <div className="space-y-3">
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>

      </div>
    </div>
  );
}

export default App;