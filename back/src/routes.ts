// src/routes/taskRoutes.ts
import express from 'express';
import * as taskHandler from './handlers/taskHandlers';

const router = express.Router();

// Rutas de tareas
router.get('/tasks', taskHandler.getTasksHandler);         // Obtener todas las tareas
router.get('/tasks/:id', taskHandler.getTaskByIdHandler);  // Obtener tarea por ID
router.post('/tasks', taskHandler.createTaskHandler);     // Crear nueva tarea
router.put('/tasks/:id', taskHandler.updateTaskHandler);  // Editar tarea
router.delete('/tasks/:id', taskHandler.deleteTaskHandler); // Borrar tarea
router.patch('/tasks/:id/completed', taskHandler.markTaskAsCompletedHandler); // Marcar como completada

export default router;
