import { GrPowerReset } from 'react-icons/gr';
import style from './TodoReset.module.css';

function TodoReset() {
  return (
    <div className={style.btnReset}>
      <button className={style.btn}>
        <GrPowerReset />
      </button>
    </div>
  );
}

export default TodoReset;
