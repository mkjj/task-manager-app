import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleStatusChange = async (newStatus) => {
    await onUpdate(task._id, { status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task._id);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      default: return 'status-pending';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      default: return 'priority-low';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={`task-item ${getPriorityColor(task.priority)}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="btn-secondary"
          >
            {showDetails ? 'Hide' : 'View'}
          </button>
          <button 
            onClick={handleDelete}
            className="btn-danger"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="task-meta">
        <span className={`status-badge ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
        <span className="priority-badge">{task.priority} priority</span>
        <span className="due-date">Due: {formatDate(task.dueDate)}</span>
      </div>

      {showDetails && (
        <div className="task-details">
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          
          <div className="status-actions">
            <label>Update Status:</label>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="status-select"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;