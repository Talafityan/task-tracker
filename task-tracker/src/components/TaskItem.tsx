import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li>
      <span>{task.title}</span>
      {" - "}
      <span>{task.priority}</span>
    </li>
  );
}

export default TaskItem;