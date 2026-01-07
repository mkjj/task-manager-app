// services/api/tasks.js
import api from '../client';

export const taskApi = {
  fetch: () => api.get('/tasks'),
  GetByid: (id) => api.get(`/tasks/${id}`),
  Create: (data) => api.post('/tasks', data),
  Update: (id, data) => api.put(`/tasks/${id}`, data),
  delete: (id) => api.delete(`/tasks/${id}`),
};