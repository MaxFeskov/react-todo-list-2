import TodoItem from '../TodoItem';
import TodoFilter from '../TodoFilter';
import NewTodo from '../NewTodo';

import './style.scss';


function TodoList() {
  return (
    <>
      <TodoFilter />
      <ul className="todo-list">
      <li className="todo-list__item">
          <NewTodo />
        </li>
        {
          Array(3).fill(null).map((_, index) => (
            <li key={index} className="todo-list__item">
          <TodoItem />
        </li>
          ))
        }
      </ul>
    </>
  )
}

export default TodoList;
