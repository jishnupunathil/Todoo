import { useEffect, useState } from 'react'
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import './index.css'


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
<div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-10 px-4">
  <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6">
    <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
      📝 Palakkadan ToDo List
    </h1>

         <TodoInput onAdd={(text) => {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
}} />

    <ul className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
        />
      ))}
    </ul>
  </div>
</div>
  


)
}


export default App
