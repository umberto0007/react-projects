import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.tasks}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoTasksLIst;
