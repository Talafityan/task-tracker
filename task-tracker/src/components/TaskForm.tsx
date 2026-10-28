import { useState } from "react";
import type { FormEvent } from "react";
import type { Priority } from "../types";

interface TaskFormProps {
  onAdd: (title: string, priority: Priority) => void;
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAdd(title.trim(), priority);
    setTitle("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value as Priority)
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default TaskForm;