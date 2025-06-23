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
        <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        />
       <button onClick={handleAdd}>Add</button>
        </div>
    )
}



export default TodoInput
