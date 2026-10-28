import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;