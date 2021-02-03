import React from 'react';
import Icons from '../Icons';

import './style.scss';

function NewTodo() {
  const Icon = React.createElement(Icons.Add);

  return (
    <button className="new-todo">
      {Icon}
    </button>
  )
}

export default NewTodo;