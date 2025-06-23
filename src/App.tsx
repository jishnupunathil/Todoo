import { useState } from 'react'
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import './App.css'


type Todo = {
  id: number;
  text: string;
};
function App() {
const [input,setInput]=useState("")
const [todos, setTodos] = useState<Todo[]>([]);
return(
  <div style={{ padding: "20px" }}>
      <h1>📝 My To-Do List</h1>
      <TodoInput onAdd={(text) => {
  const newTodo = {
    id: Date.now(),
    text: text,
  };
  setTodos([...todos, newTodo]);
}} />
<ul>
  {todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))}
</ul>
    </div>

)
}

export default App
