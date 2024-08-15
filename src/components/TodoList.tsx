"use client";

import { FormEvent, useState } from "react";
import Todo from "./Todo";
import * as Types from "@/types/Todo";

interface FilterMap {
  All: () => boolean;
  Active: (todo: Types.Todo) => boolean;
  Completed: (todo: Types.Todo) => boolean;
}

const todoSeed = [
  {
    id: 1,
    description: "buy a new laptop",
    completed: true,
  },
  {
    id: 2,
    description: "pack bags for holiday",
    completed: false,
  },
  {
    id: 3,
    description: "pay water bill",
    completed: false,
  },
];

type FilterOptions = "All" | "Active" | "Completed";

export default function TodoList() {
  const [todos, setTodos] = useState(todoSeed);
  const [newTodo, setNewTodo] = useState("");
  const [option, setOption] = useState<FilterOptions>("All");

  const FILTER_MAP: FilterMap = {
    All: () => true,
    Active: (todo: Types.Todo) => !todo.completed,
    Completed: (todo: Types.Todo) => todo.completed,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, description: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  };

  const handleInputChange = (value: string) => {
    if (value.length !== 100) {
      setNewTodo(value);
    }
  };

  const handleToggle = (index: number) => {
    const _todos = [...todos];
    _todos[index].completed = !_todos[index].completed;
    setTodos(_todos);
  };

  const handleDelete = (index: number) => {
    const _todos = [...todos];
    _todos.splice(index, 1);
    console.log(_todos);
    setTodos(_todos);
  };

  return (
    <div>
      <button
        onClick={() => setOption("All")}
        className="bg-indigo-500 text-white font-bold py-1 px-2 rounded-md hover:bg-indigo-700 m-1"
      >
        All
      </button>
      <button
        onClick={() => setOption("Active")}
        className="bg-indigo-500 text-white font-bold py-1 px-2 rounded-md hover:bg-indigo-700 m-1"
      >
        Active
      </button>
      <button
        onClick={() => setOption("Completed")}
        className="bg-indigo-500 text-white font-bold py-1 px-2 rounded-md hover:bg-indigo-700 m-1"
      >
        Completed
      </button>
      <ul>
        {todos.filter(FILTER_MAP[option]).map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onToggleComplete={() => handleToggle(index)}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)} className="flex space-x-4">
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          value={newTodo}
          className="appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
