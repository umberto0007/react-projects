import { useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [todosHeader, setTodosHeader] = useState('');
  const [todosText, setTodosText] = useState('');
  //states todosTextDirty and todosTextError created for error handling
  const [todosTextDirty, setTodosTextDirty] = useState(false);
  const [todosTextError, setTodosTextError] = useState(
    'Поле задачи не может быть пустым'
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(todosHeader, todosText);
    todosText && setTodosHeader('');
    setTodosText('');
  };

  const todosTextHandler = (e) => {
    setTodosText(e.target.value);
    if (!e.target.value) {
      setTodosTextError('Введите задачу');
    } else {
      setTodosTextError('');
    }
  };

  const blurHandler = (e) => {
    e.target.name === 'text' && setTodosTextDirty(true);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={style.myInput}>
        <input
          value={todosHeader}
          className={style.inputText}
          type="text"
          placeholder="Заголовок..."
          onChange={(e) => setTodosHeader(e.target.value)}
        />
      </div>
      <div className={style.myInput}>
        <input
          className={
            todosTextError && todosTextDirty
              ? style.inputNoText
              : style.inputText
          }
          type="text"
          placeholder="Моя задача..."
          value={todosText}
          onChange={(e) => todosTextHandler(e)}
          name="text"
          onBlur={(e) => blurHandler(e)}
          required
        />

        <button title="создать задачу" type="submit" className={style.create}>
          <AiOutlinePlusSquare />
        </button>
      </div>

      {todosTextDirty && (
        <div className={style.textError}>{todosTextError}</div>
      )}
    </form>
  );
}

export default TodoForm;
