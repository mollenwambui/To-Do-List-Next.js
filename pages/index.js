import dynamic from 'next/dynamic';

// Dynamically import TodoList with SSR disabled
const TodoListWithNoSSR = dynamic(() => import('@/components/TodoList'), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoListWithNoSSR />
    </div>
  );
}
