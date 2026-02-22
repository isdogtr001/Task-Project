import axios from "axios";
import type { Task } from "../types/task.types";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchTasks = async (status?: string): Promise<Task[]> => {
  const res = await API.get("/tasks", {
    params: status ? { status } : {},
  });
  return res.data;
};

export const createTask = async (data: Partial<Task>) => {
  return API.post("/tasks", data);
};

export const updateTask = async (id: string, data: Partial<Task>) => {
  return API.put(`/tasks/${id}`, data);
};

export const deleteTask = async (id: string) => {
  return API.delete(`/tasks/${id}`);
};