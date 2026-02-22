import { create } from "zustand";
import type { Task } from "../types/task.types";
import * as api from "../api/task.api";

interface TaskState {
  tasks: Task[];
  fetchAll: () => Promise<void>;
  addTask: (task: Partial<Task>) => Promise<void>;
  updateStatus: (id: string, status: Task["status"]) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],

  fetchAll: async () => {
    const tasks = await api.fetchTasks();
    set({ tasks });
  },

  addTask: async (task) => {
    await api.createTask(task);
    const tasks = await api.fetchTasks();
    set({ tasks });
  },

  updateStatus: async (id, status) => {
    await api.updateTask(id, { status });
    const tasks = await api.fetchTasks();
    set({ tasks });
  },

  removeTask: async (id) => {
    await api.deleteTask(id);
    const tasks = await api.fetchTasks();
    set({ tasks });
  },
}));
