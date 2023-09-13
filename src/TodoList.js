import { useEffect, useState } from 'react';
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
    localStorage.setItem('todolist', JSON.stringify([...todos, newTodoItem]));
  };

  const deleteTodoHandler = (id) => {
    let deleteTodo = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todolist', JSON.stringify(deleteTodo));
    setTodos(deleteTodo);
  };

  const toggleTodoHandler = (id) => {
    let toggleTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    );
    localStorage.setItem('todolist', JSON.stringify(toggleTodo));
    setTodos(toggleTodo);
  };

  const resetTodosHandler = () => {
    localStorage.setItem('todolist', JSON.stringify([]));
    setTodos([]);
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    savedTodo && setTodos(savedTodo);
  }, []);

  return (
    <div className="todo-list">
      <div className="main">
        <div className="container">
          <h1>Планировщик </h1>
          <div className="wrapp">
            <TodoForm addTodo={addTodoHandle} />
            <TodoReset resetTodos={resetTodosHandler} />
            <TodoTasksLIst
              todos={todos}
              deleteTodo={deleteTodoHandler}
              toggleTodo={toggleTodoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
