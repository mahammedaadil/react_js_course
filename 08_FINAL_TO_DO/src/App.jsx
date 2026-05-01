import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import { useEffect } from "react";
import DisplayTasks from "./components/DisplayTasks";

function App() {
  const [task, setTask] = useState(() => {
    const data = localStorage.getItem("task");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const addTodo = (text) => {
    if (text === "") {
      alert("u must enter task");
      return;
    }
    const isDuplicate = task.some(
      (t) => t.task_to_complete.toLowerCase() === text.toLowerCase(),
    );

    if (isDuplicate) {
      alert("Task already exists");
      return;
    }

    const taskObj = {
      id: Date.now(),
      task_to_complete: text,
      completed: false,
    };

    setTask([...task, taskObj]);
  };

  const deleteTodo = (id) => {
    setTask((prev) => prev.filter((item) => item.id !== Number(id)));
  };

  const updateTodo = (id, newTask) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, task_to_complete: newTask } : item,
      ),
    );
  };

  const toggleStatus = (id) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <>
      <h3 className="text-3xl font-bold text-slate-800 tracking-tight text-center mt-8">
        To Do List
      </h3>

      <div className="flex items-center justify-center mt-10">
        <ToDoForm addTask={addTodo} />
      </div>
      <DisplayTasks
        tasks={task}
        toggleStatusToDo={toggleStatus}
        deleteToDo={deleteTodo}
        updateToDo={updateTodo}
      />
    </>
  );
}

export default App;
