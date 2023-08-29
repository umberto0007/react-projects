import { RiDeleteBin6Fill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={style.task}>
      <input
        className={style.inputRadio}
        type="radio"
        value="1"
        name="nameradio"
      />
      <div className={style.taskContent}>
        <div className={style.taskHeader}>
          <div>{todo.header}</div>
        </div>

        <div className={style.taskText}>
          <div>{todo.text}</div>
        </div>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className={style.delete}>
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Todo;
