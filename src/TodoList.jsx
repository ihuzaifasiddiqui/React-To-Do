import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul>
            {todos.length === 0 && <p>No todos left!</p>}
            {todos.map(todo=>(
                <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}