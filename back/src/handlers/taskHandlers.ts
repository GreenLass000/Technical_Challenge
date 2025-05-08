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

