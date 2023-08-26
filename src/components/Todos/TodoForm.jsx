import { IoCreateOutline } from 'react-icons/io5';
import style from './TodoForm.module.css';

function TodoForm() {
  return (
    <form>
      <div className={style.myInput}>
        <input
          className={style.inputText}
          type="text"
          placeholder="header..."
        />
        <button className={style.create}>
          <IoCreateOutline />
        </button>
      </div>
      <div className={style.myInput}>
        <input
          className={style.inputText}
          type="text"
          placeholder="my task..."
        />
        <button className={style.create}>
          <IoCreateOutline />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
