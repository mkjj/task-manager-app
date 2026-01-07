// pages/DashboardPage.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'context/AuthContext';
import { taskApi } from 'services/api/endpoints/task';
import TaskList from 'components/common/Tasks/TaskList';
import TaskForm from 'components/common/Tasks/TaskForm';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  const {t} = useTranslation();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskApi.fetch();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await taskApi.Create(taskData);
      setTasks([response.data, ...tasks]);
      setShowForm(false);
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error creating task');
    }
  };

  const handleUpdateTask = async (taskId, updateData) => {
    try {
      const response = await taskApi.Update(taskId, updateData);
      setTasks(tasks.map(task => 
        task._id === taskId ? response.data : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskApi.delete(taskId);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error deleting task');
    }
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.status === 'completed').length,
    pending: tasks.filter(task => task.status === 'pending').length,
    inProgress: tasks.filter(task => task.status === 'in-progress').length,
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>{t('dashboard.welcomeBack', { name: user?.name })}</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? t('common.cancel') : t('dashboard.createTask')}
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{t('dashboard.stats.totalTasks')}</h3>
          <p className="stat-number">{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>{t('dashboard.stats.completed')}</h3>
          <p className="stat-number">{stats.completed}</p>
        </div>
        <div className="stat-card">
          <h3>{t('dashboard.stats.inProgress')}</h3>
          <p className="stat-number">{stats.inProgress}</p>
        </div>
        <div className="stat-card">
          <h3>{t('dashboard.stats.pending')}</h3>
          <p className="stat-number">{stats.pending}</p>
        </div>
      </div>

      {showForm && (
        <div className="task-form-modal">
          <h2>{t('tasks.createTask')}</h2>
          <TaskForm onSubmit={handleCreateTask} />
        </div>
      )}

      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        loading={loading}
      />
    </div>
  );
};

export default DashboardPage;