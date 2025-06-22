import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [input,setInput]=useState("")
return(
  <div style={{ padding: "20px" }}>
      <h1>📝 My To-Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      {/* <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>✅ {todo.text}</li>
        ))}
      </ul> */}
    </div>

)
}

export default App
