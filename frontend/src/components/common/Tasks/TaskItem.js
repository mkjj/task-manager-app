import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: task.title,
    description: task.description || '',
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate ? task.dueDate.split('T')[0] : ''
  });

  const handleStatusChange = async (newStatus) => {
    await onUpdate(task._id, { status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task._id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditFormData({
      title: task.title,
      description: task.description || '',
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate ? task.dueDate.split('T')[0] : ''
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditFormData({
      title: task.title,
      description: task.description || '',
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate ? task.dueDate.split('T')[0] : ''
    });
  };

  const handleSaveEdit = async () => {
    if (!editFormData.title.trim()) {
      alert('Title is required');
      return;
    }

    try {
      await onUpdate(task._id, editFormData);
      setIsEditing(false);
    } catch (error) {
      alert('Error updating task');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

  // Editing Mode
  if (isEditing) {
    return (
      <div className={`task-item editing ${getPriorityColor(task.priority)}`}>
        <div className="task-edit-form">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={editFormData.title}
              onChange={handleInputChange}
              required
              className="edit-input"
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              rows="3"
              className="edit-textarea"
              placeholder="Add a description..."
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={editFormData.status}
                onChange={handleInputChange}
                className="edit-select"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={editFormData.priority}
                onChange={handleInputChange}
                className="edit-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={editFormData.dueDate}
              onChange={handleInputChange}
              className="edit-input"
            />
          </div>
          
          <div className="edit-actions">
            <button onClick={handleSaveEdit} className="btn-primary">
              Save Changes
            </button>
            <button onClick={handleCancelEdit} className="btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal View Mode
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
            onClick={handleEdit}
            className="btn-edit"
          >
            Edit
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