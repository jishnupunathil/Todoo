import { useEffect, useState } from 'react'
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import './App.css'


type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
const getInitialTodos = (): Todo[] => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};
const [todos, setTodos] = useState<Todo[]>(getInitialTodos());

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const deleteTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

const toggleComplete = (id: number) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};



return(
  <div style={{ padding: "20px" }}>
      <h1>📝 My To-Do List</h1>
      <TodoInput onAdd={(text) => {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
}} />
<ul>
  {todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleComplete}/>
  ))}
</ul>
    </div>

)
}

export default App
