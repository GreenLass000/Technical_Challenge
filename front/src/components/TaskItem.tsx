import React from "react";

interface TaskItemProps {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	createdAt: string;
	onComplete: () => void;
	onUndo: () => void;
	onDelete: () => void;
	onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
	id,
	title,
	description,
	completed,
	createdAt,
	onComplete,
	onUndo,
	onDelete,
	onEdit,
}) => {
	return (
	<div key={id} className="border p-4 mb-2 rounded-md shadow-sm bg-white">
		<h3 className="font-bold text-lg">{title}</h3>
		<p className="text-gray-600">{description}</p>
		<p className={`text-sm ${completed ? "text-green-500" : "text-red-500"}`}>
			{completed ? "Completed" : "Pending"}
		</p>
		<p className="text-gray-400 text-xs">{new Date(createdAt).toLocaleDateString()}</p>
		<button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
			onClick={completed ? onUndo : onComplete}>
			{completed ? "Undo" : "Complete"}
		</button>
		<button className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded-md" onClick={onDelete}>
			Delete
		</button>
		<button className="mt-2 ml-2 bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={onEdit}>
			Edit
		</button>
	</div>
	);
};

export default TaskItem;
