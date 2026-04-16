import { useState, useEffect } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState(() => {
    const data = localStorage.getItem("queue");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queue));
  }, [queue]);

  const addToQueue = (customer) => {
    const newCustomer = {
      ...customer,
      id: Date.now(),
      status: "waiting",
    };
    setQueue((prevQueue) => [...prevQueue, newCustomer]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue((prevQueue) =>
      prevQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />

        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}

export default App;
