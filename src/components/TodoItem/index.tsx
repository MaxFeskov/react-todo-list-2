import Button from '../Button';
import './style.scss';
import Icons from '../Icons';

function TodoItem() {
  const isEditMode = false;
  const statusIcon = Icons.InProgress;

  return (
    <div className="todo-item">
      <input type="text" readOnly={!isEditMode} className="todo-item__title" defaultValue="Todo item" />
      <textarea readOnly={!isEditMode} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, optio?" className="todo-item__text"></textarea>
      <div className="todo-item__btns">
        <div className="todo-item__btn-status">
          <Button icon={statusIcon}></Button>
        </div>
        <div className="todo-item__btn-status">
          {
            isEditMode
              ? <Button>Save</Button>
              : <Button>Edit</Button>
          }
        </div>
        <div className="todo-item__btn-status">
          <Button icon={Icons.Delete}></Button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;
