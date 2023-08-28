import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoReset from './components/Todos/TodoReset';
import TodoTasksLIst from './components/Todos/TodoTasksLIst';
import './fonts/American Retro.ttf';
import './TodoLIst.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="TodoList">
      <div className="main">
        <div className="container">
          <h1>Todo list</h1>
          <div className="wrapp">
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoReset />
            <TodoTasksLIst todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
