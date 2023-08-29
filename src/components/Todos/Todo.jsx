import { RiDeleteBin6Fill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={style.task}>
      <div className={style.taskContent}>
        <div className={style.taskHeader}>
          <div>{todo.header}</div>
        </div>

        <div className={style.taskText}>
          <div>{todo.text}</div>
        </div>
      </div>
      <button onClick={() => toggleTodo(todo.id)} className={style.complete}>
        <AiOutlineCheck />
      </button>
      <button onClick={() => deleteTodo(todo.id)} className={style.delete}>
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Todo;
