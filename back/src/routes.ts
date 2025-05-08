import express from 'express';
import * as taskHandler from './handlers/taskHandlers';

const router = express.Router();

router.get('/tasks', taskHandler.getTasksHandler);
router.get('/tasks/:id', taskHandler.getTaskByIdHandler);
router.post('/tasks', taskHandler.createTaskHandler);
router.put('/tasks/:id', taskHandler.updateTaskHandler);
router.delete('/tasks/:id', taskHandler.deleteTaskHandler);
router.patch('/tasks/:id/completed', taskHandler.markTaskAsCompletedHandler);
router.patch('/tasks/:id/undo', taskHandler.unCompleteTaskHandler);

export default router;
