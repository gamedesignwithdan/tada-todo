import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <div className="grid place-items-center m-2">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wider uppercase m-10">
          Tada Todos ✨
        </h1>
        <TodoList />
      </div>
    </main>
  );
}
