import React, { useState, useEffect } from 'react';
import { todoService } from './api';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTodo, setEditingTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError('');
      let response;

      if (filter === 'all') {
        response = await todoService.getAllTodos();
      } else {
        const completed = filter === 'completed';
        response = await todoService.getTodosByStatus(completed);
      }

      setTodos(response.data);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todo) => {
    await todoService.createTodo(todo);
    fetchTodos();
  };

  const handleUpdateTodo = async (id, todo) => {
    await todoService.updateTodo(id, todo);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await todoService.deleteTodo(id);
        fetchTodos();
      } catch (err) {
        alert('Failed to delete todo');
      }
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      await todoService.updateTodo(todo.id, {
        ...todo,
        completed: !todo.completed,
      });
      fetchTodos();
    } catch (err) {
      alert('Failed to update todo');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <div className="icon">✓</div>
          <h1>Todo Application</h1>
        </header>

        <TodoForm onAdd={handleAddTodo} />

        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={filter === 'pending' ? 'active' : ''}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <div className="todo-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <p>No todos found</p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onEdit={setEditingTodo}
                  onDelete={handleDeleteTodo}
                  onToggle={handleToggleTodo}
                />
              ))
            )}
          </div>
        )}

        <EditModal
          todo={editingTodo}
          onClose={() => setEditingTodo(null)}
          onUpdate={handleUpdateTodo}
        />
      </div>
    </div>
  );
}

export default App;
