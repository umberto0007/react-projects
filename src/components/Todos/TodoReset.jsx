import { RiDeleteBin5Line } from 'react-icons/ri';
import style from './TodoReset.module.css';

function TodoReset({ resetTodos }) {
  return (
    <div className={style.btnReset}>
      <button
        title="удалить все задачи"
        onClick={() => resetTodos()}
        className={style.btn}
      >
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default TodoReset;
