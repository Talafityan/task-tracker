import { useState } from "react";
import type { Task } from "./types";
import TaskList from "./components/TaskList";

function App() {
  const [tasks] = useState<Task[]>([
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

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;