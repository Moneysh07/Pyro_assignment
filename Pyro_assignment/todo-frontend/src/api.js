import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todos';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const todoService = {
    getAllTodos: () => api.get(''),

    getTodosByStatus: (completed) => api.get('', { params: { completed } }),

    getTodoById: (id) => api.get(`/${id}`),

    createTodo: (todo) => api.post('', todo),

    updateTodo: (id, todo) => api.put(`/${id}`, todo),

    deleteTodo: (id) => api.delete(`/${id}`),
};

export default api;
