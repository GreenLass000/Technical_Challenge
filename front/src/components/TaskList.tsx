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
	const [newTaskTitle, setNewTaskTitle] = useState("");
	const [newTaskDescription, setNewTaskDescription] = useState("");

	useEffect(() => {
		axios.get("http://localhost:4000/tasks")
			.then((response) => {
				if (Array.isArray(response.data)) {
					setTasks(response.data);
				} else {
					console.error("Error: Response is not an array", response.data);
				}
			})
			.catch((error) => console.error("Error fetching tasks:", error));
	}, []);

	const handleComplete = (taskId: number) => {
		axios.patch(`http://localhost:4000/tasks/${taskId}/completed`)
			.then(() => {
				setTasks((prevTasks) =>
					prevTasks.map((task) =>
						task.id === taskId ? { ...task, completed: true } : task
					)
				);
			})
			.catch((error) => console.error("Error completing task:", error));
	};

	const handleUndo = (taskId: number) => {
		axios.patch(`http://localhost:4000/tasks/${taskId}/undo`)
			.then(() => {
				setTasks((prevTasks) =>
					prevTasks.map((task) =>
						task.id === taskId ? { ...task, completed: false } : task
					)
				);
			})
			.catch((error) => console.error("Error completing task:", error));
	};

	const handleDelete = (taskId: number) => {
		axios.delete(`http://localhost:4000/tasks/${taskId}`)
			.then(() => {
				setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
			})
			.catch((error) => console.error("Error deleting task:", error));
	};

	const handleEdit = (taskId: number) => {
	const updatedTitle = prompt("Enter new title");
	const updatedDescription = prompt("Enter new description");
	if (updatedTitle && updatedDescription) {
		axios.put(`http://localhost:4000/tasks/${taskId}`, {
				title: updatedTitle,
				description: updatedDescription,
			})
			.then((response) => {
				setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === taskId ? { ...task, ...response.data } : task
				));
			})
			.catch((error) => console.error("Error updating task:", error));
		}
	};

	const handleCreateTask = () => {
	if (!newTaskTitle || !newTaskDescription) {
		alert("Both title and description are required.");
		return;
	}

	const newTask = {
		title: newTaskTitle,
		description: newTaskDescription,
	};

	axios.post("http://localhost:4000/tasks", newTask)
		.then((response) => {
			setTasks((prevTasks) => [...prevTasks, response.data]);
			setNewTaskTitle("");
			setNewTaskDescription("");
		})
		.catch((error) => console.error("Error creating task:", error));
	};

	return (
	<div className="p-4">
		<h2 className="text-2xl font-bold mb-4">Task List</h2>

		<div className="mb-4">
		<input
			type="text"
			className="border p-2 rounded-md w-full mb-2"
			placeholder="Task Title"
			value={newTaskTitle}
			onChange={(e) => setNewTaskTitle(e.target.value)}
		/>
		<textarea
			className="border p-2 rounded-md w-full mb-2"
			placeholder="Task Description"
			value={newTaskDescription}
			onChange={(e) => setNewTaskDescription(e.target.value)}
		/>
		<button
			className="bg-green-500 text-white px-4 py-2 rounded-md"
			onClick={handleCreateTask}
		>
			Create Task
		</button>
		</div>

		{tasks.map((task) => (
		<TaskItem
			key={task.id}
			{...task}
			onComplete={() => handleComplete(task.id)}
			onUndo={() => handleUndo(task.id)}
			onDelete={() => handleDelete(task.id)}
			onEdit={() => handleEdit(task.id)}
		/>
		))}
	</div>
	);
};

export default TaskList;
