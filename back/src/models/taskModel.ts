// src/models/taskModel.ts
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function getTasks() {
	return await prisma.task.findMany();
}

export async function getTaskById(id: number) {
	return await prisma.task.findUnique({
		where: {
			id,
		},
	});
}

export async function createTask(taskData: { title: string, description: string }) {
	return await prisma.task.create({
		data: taskData,
	});
}

export async function updateTask(id: number, taskUpdates: { title?: string, description?: string, completed?: boolean }) {
	return await prisma.task.update({
		where: { id },
		data: taskUpdates,
	});
}

export async function deleteTask(id: number) {
	return await prisma.task.delete({
		where: { id },
	});
}

export async function markTaskAsCompleted(id: number) {
	return await prisma.task.update({
		where: { id },
		data: { completed: true },
	});
}

export async function undoTask(id: number) {
	return await prisma.task.update({
		where: { id },
		data: { completed: false },
	});
}