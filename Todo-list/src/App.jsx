import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './assets/index.css';

function App() {
  let [todos, setTodos] = useState([{ task: 'First task', id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState('');

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo('');
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markasDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: (todo.isDone = true),
          };  
        } else {
          return todo;
        }
      })
    );
  };

  let markasDoneAll = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      return {
        ...todo,
        isDone: todo.isDone = true,
      }
    }))
  }

  return (
    <>
      <div className='todo-list'>
        <input
          placeholder='add a task'
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addNewTask}>Add Task</button>
        <h4>Task&apos;s Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className={todo.isDone ? 'checked' : ''}>{todo.task}</span>
              &nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              &nbsp;&nbsp;
              <button onClick={() => markasDone(todo.id)}>Mark as Done</button>
            </li>
          ))}
        </ul>
        <button onClick={() => markasDoneAll()}>Mark All as DOne</button>
      </div>
    </>
  );
}

export default App;
