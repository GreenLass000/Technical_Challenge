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

export async function createTaskHandler(req: Request, res: Response): Promise<void> {
  const { title, description } = req.body;
  try {
	const newTask = await taskModel.createTask({ title, description });
	res.status(201).json(newTask);
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error creating task" });
  }
}

export async function updateTaskHandler(req: Request, res: Response): Promise<void> {
  const taskId = parseInt(req.params.id, 10);
  const { title, description, completed } = req.body;
  try {
	const updatedTask = await taskModel.updateTask(taskId, { title, description, completed });
	if (updatedTask) {
	  res.json(updatedTask);
	} else {
	  res.status(404).json({ message: 'Task not found' });
	}
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error updating task" });
  }
}

export async function deleteTaskHandler(req: Request, res: Response): Promise<void> {
  const taskId = parseInt(req.params.id, 10);
  try {
	const deleted = await taskModel.deleteTask(taskId);
	if (deleted) {
	  res.status(204).send();
	} else {
	  res.status(404).json({ message: 'Task not found' });
	}
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error deleting task" });
  }
}

export async function markTaskAsCompletedHandler(req: Request, res: Response): Promise<void> {
  const taskId = parseInt(req.params.id, 10);
  try {
	const task = await taskModel.markTaskAsCompleted(taskId);
	if (task) {
	  res.json(task);
	} else {
	  res.status(404).json({ message: 'Task not found' });
	}
  } catch (e) {
	console.log(e);
	res.status(500).json({ message: "Error marking task as completed" });
  }
}

export async function unCompleteTaskHandler(req: Request, res: Response): Promise<void> {
	const taskId = parseInt(req.params.id, 10);  // Obtener el ID de la tarea
	try {
	  const task = await taskModel.unCompleteTask(taskId);
  
	  if (task) {
		res.json(task);
	  } else {
		res.status(404).json({ message: 'Task not found' });
	  }
	} catch (e) {
	  console.log(e);
	  res.status(500).json({ message: "Error marking task as not completed" });
	}
  }