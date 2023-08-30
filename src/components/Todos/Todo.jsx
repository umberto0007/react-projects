import { RiDeleteBin6Fill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${style.task} ${todo.isCompleted && style.completeTask}`}>
      <div className={style.taskContent}>
        <div
          className={`${style.taskHeader} ${
            todo.isCompleted && style.completeTaskHeader
          }`}
        >
          <div>{todo.header}</div>
        </div>

        <div
          className={`${style.taskText} ${
            todo.isCompleted && style.completeTaskText
          }`}
        >
          <div>{todo.text}</div>
        </div>
      </div>
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`${style.complete} ${
          todo.isCompleted && style.completeTrue
        }`}
      >
        <AiOutlineCheck />
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={`${style.delete} ${
          todo.isCompleted && style.deleteComplete
        }`}
      >
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Todo;
