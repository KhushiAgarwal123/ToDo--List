import React from 'react';

export const Todos = ({ todos, onDelete }) => {
  console.log("Rendering Todos component with todos:", todos); // Debug statement

  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        todos.map((todo) => {
          return (
            <div key={todo.sno}>
              <h4>{todo.title}</h4>
              <p>{todo.desc}</p>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo.sno)}>Delete</button>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};
export default Todos;