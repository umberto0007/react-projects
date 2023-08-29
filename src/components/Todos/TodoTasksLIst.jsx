import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst({ todos, deleteTodo }) {
  return (
    <div className={style.tasks}>
      {todos.map((todo) => (
        <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoTasksLIst;
