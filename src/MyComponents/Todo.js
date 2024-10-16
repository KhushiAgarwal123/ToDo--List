import React from 'react';

export const Todo = ({ todo, onDelete }) => {  
  return (
    <div>
      <p>{todo.desc}</p>
      <h4>{todo.title}</h4>
      <button className="btn btn-danger" onClick={() => onDelete(todo.sno)}>
        Delete
      </button>
    </div>
  );
}
