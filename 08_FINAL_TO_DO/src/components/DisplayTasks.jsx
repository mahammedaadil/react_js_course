import { useRef, useState } from "react";

function DisplayTasks({ tasks, toggleStatusToDo, deleteToDo, updateToDo }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [search, setSearch] = useState("");
  const editRef = useRef(null);

  const startEdit = (id) => {
    setEditId(id);
    const taskToEdit = tasks.find((item) => item.id === id);
    if (taskToEdit) {
      setEditText(taskToEdit.task_to_complete);
    }
    setTimeout(() => {
      editRef.current?.focus();
    }, 0);
  };

  const saveEdit = (id) => {
    updateToDo(id, editText);
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const filteredTasks = tasks.filter((item) =>
    item.task_to_complete.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="flex items-stretch w-64">
        <span className="inline-flex items-center px-2 text-xs text-gray-900 bg-gray-200 border border-gray-300 rounded-l-md whitespace-nowrap">
          Search:
        </span>
        <input
          className="w-full px-3 py-1 text-xs border border-l-0 border-gray-300 rounded-r-md 
    focus:ring-1 focus:ring-blue-500 focus:z-10 outline-none transition-all placeholder:text-gray-400"
          type="text"
          placeholder="Search By Task Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-h-[300px] overflow-y-auto overflow-x-auto p-4 border border-gray-200 rounded-xl shadow-lg custom-scrollbar">
        <table className="min-w-full bg-white border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Tasks</th>
              <th className="py-3 px-6 text-left font-semibold">Status</th>
              <th className="py-3 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {filteredTasks.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-10 text-gray-400 text-sm"
                >
                  No tasks available
                </td>
              </tr>
            ) : (
              filteredTasks.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {editId === item.id ? (
                    <>
                      <td className="py-3 px-6 border-b border-gray-100">
                        <input
                          type="text"
                          ref={editRef}
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </td>
                      <td className="py-3 px-6 border-b border-gray-100">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${item.completed ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                        >
                          {item.completed ? "Completed" : "Pending"}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center space-x-2 border-b border-gray-100">
                        <button
                          onClick={() => saveEdit(item.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-6 border-b border-gray-100">
                        {item.task_to_complete}
                      </td>
                      <td className="py-3 px-6 border-b border-gray-100">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${item.completed ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                        >
                          {item.completed ? "Completed" : "Pending"}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center space-x-2 border-b border-gray-100">
                        <button
                          onClick={() => startEdit(item.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteToDo(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => toggleStatusToDo(item.id)}
                          className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          {item.completed ? "Pending" : "Complete"}
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayTasks;
