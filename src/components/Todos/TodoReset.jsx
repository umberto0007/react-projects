import { GrPowerReset } from 'react-icons/gr';
import style from './TodoReset.module.css';

function TodoReset({ resetTodos }) {
  return (
    <div className={style.btnReset}>
      <button onClick={() => resetTodos()} className={style.btn}>
        <GrPowerReset />
      </button>
    </div>
  );
}

export default TodoReset;
