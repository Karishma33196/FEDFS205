import React, { useState, useEffect } from "react";
import tasksData from "./tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load initial tasks from JSON
  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Task List App</h1>

      {/* Form to add task */}
      <form onSubmit={handleAddTask} className="mb-5 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="p-2 rounded border border-gray-400"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
        >
          Add
        </button>
      </form>

      {/* Conditional rendering */}
      {tasks.length === 0 ? (
        <p className="text-gray-600 text-xl">No tasks found</p>
      ) : (
        <ul className="w-full max-w-md space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-3 rounded shadow"
            >
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`px-2 py-1 rounded ${
                    task.completed
                      ? "bg-yellow-400 hover:bg-yellow-500"
                      : "bg-blue-400 hover:bg-blue-500 text-white"
                  }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
