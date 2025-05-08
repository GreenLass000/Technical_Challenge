import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Obtener las tareas desde la API
  useEffect(() => {
	axios
	  .get("http://localhost:3000/tasks")
	  .then((response) => setTasks(response.data))
	  .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Completar tarea
  const handleComplete = (taskId: number) => {
	axios
	  .patch(`http://localhost:3000/tasks/${taskId}/completed`)
	  .then(() => {
		setTasks((prevTasks) =>
		  prevTasks.map((task) =>
			task.id === taskId ? { ...task, completed: true } : task
		  )
		);
	  })
	  .catch((error) => console.error("Error completing task:", error));
  };

  // Eliminar tarea
  const handleDelete = (taskId: number) => {
	axios
	  .delete(`http://localhost:3000/tasks/${taskId}`)
	  .then(() => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	  })
	  .catch((error) => console.error("Error deleting task:", error));
  };

  // Editar tarea
  const handleEdit = (taskId: number) => {
	const updatedTitle = prompt("Enter new title");
	const updatedDescription = prompt("Enter new description");
	if (updatedTitle && updatedDescription) {
	  axios
		.put(`http://localhost:3000/tasks/${taskId}`, {
		  title: updatedTitle,
		  description: updatedDescription,
		})
		.then((response) => {
		  setTasks((prevTasks) =>
			prevTasks.map((task) =>
			  task.id === taskId ? { ...task, ...response.data } : task
			)
		  );
		})
		.catch((error) => console.error("Error updating task:", error));
	}
  };

  return (
	<div className="p-4">
	  <h2 className="text-2xl font-bold mb-4">Task List</h2>
	  {tasks.map((task) => (
		<TaskItem
		  key={task.id}
		  {...task}
		  onComplete={() => handleComplete(task.id)}
		  onDelete={() => handleDelete(task.id)}
		  onEdit={() => handleEdit(task.id)}
		/>
	  ))}
	</div>
  );
};

export default TaskList;
