import { Request, Response } from 'express';
import { initDB } from '../database';
import { v4 as uuidv4 } from 'uuid';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const db = await initDB();
    const { status } = req.query;

    let tasks;

    if (status) {
      tasks = await db.all(
        `SELECT * FROM tasks WHERE status = ?`,
        status
      );
    } else {
      tasks = await db.all(`SELECT * FROM tasks`);
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const db = await initDB();
    const id = uuidv4();

    await db.run(
      `INSERT INTO tasks (id, title, description, status)
       VALUES (?, ?, ?, ?)`,
      id,
      title,
      description || null,
      status || 'To Do'
    );

    res.status(201).json({ message: 'Task created', id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const db = await initDB();

    const task = await db.get(`SELECT * FROM tasks WHERE id = ?`, id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await db.run(
      `UPDATE tasks
       SET title = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      title || task.title,
      description || task.description,
      status || task.status,
      id
    );

    res.json({ message: 'Task updated' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = await initDB();

    const result = await db.run(`DELETE FROM tasks WHERE id = ?`, id);

    if (result.changes === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};