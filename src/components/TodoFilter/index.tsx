import Button from '../Button';
import Icons from '../Icons';
import './style.scss';

function TodoFilter() {
  return (
    <ul className="todo-filter">
      <li className="todo-filter__item">
        <Button icon={Icons.InProgress} />
      </li>
      <li className="todo-filter__item">
        <Button icon={Icons.Done} />
      </li>
      <li className="todo-filter__item">
        <Button icon={Icons.Fail} />
      </li>
    </ul>
  )
}

export default TodoFilter;