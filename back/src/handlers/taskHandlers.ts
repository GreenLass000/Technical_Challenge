// src/handlers/taskHandler.ts
import { Request, Response } from 'express';
import * as taskModel from '../models/taskModel';

export async function getTasksHandler(req: Request, res: Response): Promise<void> {
  try {
	const tasks = await taskModel.getTasks();
	res.json(tasks);
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error fetching tasks" });
  }
}

export async function getTaskByIdHandler(req: Request, res: Response): Promise<void> {
  const taskId = parseInt(req.params.id, 10);
  try {
	const task = await taskModel.getTaskById(taskId);
	if (task) {
	  res.json(task);
	} else {
	  res.status(404).json({ message: 'Task not found' });
	}
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error fetching task" });
  }
}

