import express from 'express';
import { addTaskHandler } from './handlers/addTaskHandler.js';

const router = express.Router();

// aquí van las rutas soportadas
router.post('/task', addTaskHandler);

export default router; 