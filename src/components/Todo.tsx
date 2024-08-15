import * as Types from "@/types/Todo";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface TodoProps {
  todo: Types.Todo;
  onToggleComplete: ChangeEventHandler<HTMLInputElement>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

export default function Todo({
  todo,
  onToggleComplete,
  handleDelete,
}: TodoProps) {
  return (
    <li className="flex items-center gap-4 py-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleComplete}
        className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <span className="w-60 break-words">{todo.description}</span>
      <button
        type="button"
        onClick={handleDelete}
        className="inline-flex items-center justify-center px-4 py-2 bg-red-700 text-white font-medium text-sm leading-5 rounded-md shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
      >
        del
      </button>
    </li>
  );
}
