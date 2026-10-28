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
    setPriority("medium");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">
        Add New Task
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
        placeholder="Enter task title..."
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {error && (
        <p className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as Priority)
          }
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-blue-500"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          + Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;