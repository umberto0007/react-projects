import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Todo from './Todo';
import style from './TodoTasksList.module.css';

function TodoTasksLIst({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.tasks}>
      <TransitionGroup>
        {todos.map(
          (todo) =>
            todo.text && (
              <CSSTransition key={todo.id} timeout={500} classNames="todo">
                <Todo
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                />
              </CSSTransition>
            )
        )}
      </TransitionGroup>
    </div>
  );
}

export default TodoTasksLIst;
