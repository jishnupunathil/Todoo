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
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* ✅ Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed} // ✅ box is ticked if completed is true
        onChange={() => onToggle(todo.id)} // 🖱️ when clicked, toggle
      />

      {/* 📝 Todo Text */}
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none", // ✅ strike if completed
          color: todo.completed ? "#888" : "#000",
          flex: 1,
        }}
      >
        {todo.text}
      </span>

      {/* ❌ Delete Button */}
      <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;