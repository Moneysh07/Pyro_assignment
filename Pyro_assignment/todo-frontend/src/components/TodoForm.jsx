import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError('Title is required');
            return;
        }

        try {
            await onAdd({ title, description });
            setTitle('');
            setDescription('');
            setError('');
        } catch (err) {
            setError(err.response?.data?.errors?.title || 'Failed to add todo');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-form">
                <div className="form-input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter a new todo"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setError('');
                        }}
                        className="form-input"
                    />
                    <input
                        type="text"
                        placeholder="Description (optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-input"
                    />
                    {error && <div className="error-message">{error}</div>}
                </div>
                <button type="submit" className="btn-submit">
                    Add Todo
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
