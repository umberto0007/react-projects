import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst() {
  return (
    <div className={style.tasks}>
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default TodoTasksLIst;
