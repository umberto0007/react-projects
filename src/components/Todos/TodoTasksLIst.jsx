import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.tasks}>
      {todos.map((todo) => (
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoTasksLIst;
