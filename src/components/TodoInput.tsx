import React, { useState } from "react";


type Props={
    onAdd:(text:string)=>void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {

     const [input, setInput] = useState("");

    const  handleAdd=()=>{
        const trimmed=input.trim();
        if (trimmed==="") return
        onAdd(trimmed)
        setInput("")
    }

    return (
       
        <form onSubmit={handleAdd} className="flex gap-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Add a new task..."
    className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
  >
    Add
  </button>
</form>
)
}



export default TodoInput
