import React from "react";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center">
			<TaskList />
		</div>
	);
};

export default App;
