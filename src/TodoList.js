import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoReset from './components/Todos/TodoReset';
import TodoTasksLIst from './components/Todos/TodoTasksLIst';
import './fonts/American Retro.ttf';
import './TodoLIst.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodoHandle = (header, text) => {
    const newTodoItem = {
      header,
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodoItem]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <div className="main">
        <div className="container">
          <h1>Todo list</h1>
          <div className="wrapp">
            <TodoForm addTodo={addTodoHandle} />
            <TodoReset />
            <TodoTasksLIst todos={todos} deleteTodo={deleteTodoHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
