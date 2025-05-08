import React from "react";

interface Task {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	createdAt: string;
}

const TaskList: React.FC = () => {
	const [tasks, setTasks] = React.useState<Task[]>([
		{
			id: 1,
			title: "Task 1",
			description: "Description for Task 1",
			completed: false,
			createdAt: new Date().toISOString(),
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description for Task 2",
			completed: true,
			createdAt: new Date().toISOString(),
		},
		{
			id: 3,
			title: "Task 3",
			description: "Description for Task 3",
			completed: false,
			createdAt: new Date().toISOString(),
		},
		{
			id: 4,
			title: "Task 4",
			description: "Description for Task 4",
			completed: true,
			createdAt: new Date().toISOString(),
		}
	]);

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Task List</h2>
			{tasks.map((task) => (
				<div key={task.id} className="border p-4 mb-2 rounded-md shadow-sm bg-white">
					<h3 className="font-bold text-lg">{task.title}</h3>
					<p className="text-gray-600">{task.description}</p>
					<p className={`text-sm ${task.completed ? "text-green-500" : "text-red-500"}`}>
						{task.completed ? "Completed" : "Pending"}
					</p>
					<p className="text-gray-400 text-xs">{new Date(task.createdAt).toLocaleDateString()}</p>
					<button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
						{task.completed ? "Undo" : "Complete"}
					</button>
					<button className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded-md">
						Delete
					</button>
					<button className="mt-2 ml-2 bg-yellow-500 text-white px-4 py-2 rounded-md">
						Edit
					</button>
				</div>
			))}
		</div>
	);
}

export default TaskList;