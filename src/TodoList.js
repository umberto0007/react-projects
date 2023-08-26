import './fonts/American Retro.ttf';
import './TodoLIst.css';
import TodoForm from './components/Todos/TodoForm';
import TodoReset from './components/Todos/TodoReset';
import TodoTasksLIst from './components/Todos/TodoTasksLIst';

function TodoList() {
  return (
    <div className="TodoList">
      <div className="main">
        <div className="container">
          <h1>Todo list</h1>
          <div className="wrapp">
            <TodoForm />
            <TodoReset />
            <TodoTasksLIst />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
