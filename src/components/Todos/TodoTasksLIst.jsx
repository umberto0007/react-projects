import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst({ todos }) {
  return (
    <div className={style.tasks}>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoTasksLIst;
