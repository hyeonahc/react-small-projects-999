import React, { useState, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      value: "Click checkbox if it's complete",
      checked: false,
    },
    {
      id: 2,
      value: 'Click red circle if you want to delte the item',
      checked: false,
    },
  ]);

  const nextId = useRef(3);

  const onInsert = value => {
    const todo = {
      id: nextId.current,
      value: value,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
