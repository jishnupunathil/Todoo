import { useState } from 'react';


export default function Counter(){

    const [count ,setCount]=useState(0)
    const [name, setName] = useState(1)
    type Light = "red" | "yellow" | "green";
    setName(2321)
     const [light, setLight] = useState<Light>("red");

    return(
        <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}></button>
        <div>
        
        </div>
        </div>
            
    )
    }