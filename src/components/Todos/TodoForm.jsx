import { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [todosHeader, setTodosHeader] = useState('');
  const [todosText, setTodosText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(todosHeader, todosText);
    setTodosHeader('');
    setTodosText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={style.myInput}>
        <input
          value={todosHeader}
          className={style.inputText}
          type="text"
          placeholder="header..."
          onChange={(e) => setTodosHeader(e.target.value)}
        />
        <button type="submit" className={style.create}>
          <IoCreateOutline />
        </button>
      </div>
      <div className={style.myInput}>
        <input
          className={style.inputText}
          type="text"
          placeholder="my task..."
          value={todosText}
          onChange={(e) => setTodosText(e.target.value)}
        />
        <button type="submit" className={style.create}>
          <IoCreateOutline />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
