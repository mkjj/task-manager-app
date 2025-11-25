import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, loading }) => {
  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  const pendingTasks = tasks.filter(task => task.status !== 'completed');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="task-list">
      {pendingTasks.length > 0 && (
        <div className="task-section">
          <h3>Active Tasks ({pendingTasks.length})</h3>
          <div className="tasks-grid">
            {pendingTasks.map(task => (
              <TaskItem
                key={task._id}
                task={task}
                onUpdate={onUpdateTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
        </div>
      )}
      
      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3>Completed Tasks ({completedTasks.length})</h3>
          <div className="tasks-grid">
            {completedTasks.map(task => (
              <TaskItem
                key={task._id}
                task={task}
                onUpdate={onUpdateTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;