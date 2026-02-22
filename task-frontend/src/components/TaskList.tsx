import { useEffect } from "react";
import { useTaskStore } from "../store/task.store";
import type { Task } from "../types/task.types";

export default function TaskList() {
  const { tasks, fetchAll, updateStatus, removeTask } = useTaskStore();

    useEffect(() => {
    fetchAll();
    }, [fetchAll]);

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.status}</p>
          </div>

          <div className="flex gap-2">
            <select
              value={task.status}
              onChange={(e) =>
                updateStatus(task.id, e.target.value as Task["status"])
              }
              className="border rounded p-1"
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}