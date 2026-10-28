import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  const priorityColors = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 cursor-pointer accent-blue-600"
        />

        <span
          className={`break-words font-medium ${
            task.done
              ? "text-slate-400 line-through"
              : "text-slate-800"
          }`}
        >
          {task.title}
        </span>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
          priorityColors[task.priority]
        }`}
      >
        {task.priority}
      </span>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;