import { RiDeleteBin6Fill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo() {
  return (
    <div className={style.task}>
      <input
        className={style.inputRadio}
        type="radio"
        value="1"
        name="nameradio"
      />
      <div className={style.taskText}>
        <div>Header</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <button className={style.delete}>
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Todo;
