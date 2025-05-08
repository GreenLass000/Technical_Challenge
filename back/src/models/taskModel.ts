// src/models/taskModel.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTasks() {
  return await prisma.task.findMany();
}

