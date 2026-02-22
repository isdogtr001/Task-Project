import { useState } from "react";
import { useTaskStore } from "../store/task.store";

export default function TaskForm() {
  const addTask = useTaskStore((s) => s.addTask);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    await addTask({ title, status: "To Do" });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <input
        className="border p-2 w-full rounded"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}