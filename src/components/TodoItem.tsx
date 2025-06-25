import react from "react"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="w-5 h-5 accent-blue-500"
    />
    <span
      className={`text-lg ${
        todo.completed ? "line-through text-gray-400" : "text-gray-800"
      }`}
    >
      {todo.text}
    </span>
  </div>
  <button
    onClick={() => onDelete(todo.id)}
    className="text-red-500 hover:text-red-700 text-xl transition"
  >
    ❌
  </button>
</li>
  );
};

export default TodoItem;