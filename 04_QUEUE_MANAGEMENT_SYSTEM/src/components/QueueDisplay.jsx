function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  const handleAction = (customer) => {
    if (customer.status === "waiting") {
      onUpdateStatus(customer.id, "serving");
    } else if (customer.status === "serving") {
      onUpdateStatus(customer.id, "completed");
    }
  };

  const getButtonText = (status) => {
    if (status === "waiting") return "Serve";
    if (status === "serving") return "Complete";
    return null;
  };

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>

      {queue.length === 0 ? (
        <p className="empty-queue">No Customer Data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>

                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {getButtonText(customer.status) && (
                  <button
                    className={
                      customer.status === "waiting"
                        ? "serve-btn"
                        : "complete-btn"
                    }
                    onClick={() => handleAction(customer)}
                  >
                    {getButtonText(customer.status)}
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
