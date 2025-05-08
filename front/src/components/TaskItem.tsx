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
		<div
		  key={id}
		  className="border border-gray-700 p-6 mb-4 rounded-lg shadow-lg bg-black hover:bg-gray-900 transition-all duration-300"
		>
		  <h3 className="font-bold text-2xl text-white mb-2 text-center">{title}</h3>
		  <p className="text-gray-400 mb-2 text-center">{description}</p>
		  <p
			className={`text-sm ${completed ? "text-green-400" : "text-red-400"} text-center`}
		  >
			{completed ? "Completed" : "Pending"}
		  </p>
		  <p className="text-gray-500 text-xs mb-4 text-center">
			{new Date(createdAt).toLocaleDateString()}
		  </p>
		  <div className="flex justify-center space-x-4">
			<button
			  className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 hover:border-2 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
			  onClick={completed ? onUndo : onComplete}
			>
			  {completed ? "Undo" : "Complete"}
			</button>
			<button
			  className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 hover:border-2 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
			  onClick={onDelete}
			>
			  Delete
			</button>
			<button
			  className="w-full sm:w-auto bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-500 hover:border-2 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
			  onClick={onEdit}
			>
			  Edit
			</button>
		  </div>
		</div>
	  );
};

export default TaskItem;
