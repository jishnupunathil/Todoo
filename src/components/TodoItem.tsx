import react from "react"

type Todo = {
  id: number;
  text: string;
};

type Props = {
  todo: Todo;
};

const TodoItem:React.FC<Props>=({todo})=>{
      return <li>✅ {todo.text}</li>;
}

export default TodoItem;