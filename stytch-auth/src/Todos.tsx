import {useState, useEffect, FormEvent} from 'react';
import {hc} from 'hono/client'
import type {TodoApp} from "../api/TodoAPI.ts";
import type {Todo} from "../api/TodoService.ts";
import {withLoginRequired} from "./Auth";

const client = hc<TodoApp>(`${window.location.origin}/api`)

const createTodo = (todoText: string) =>
    client.todos.$post({json: {todoText}})
        .then(res => res.json())
        .then(res => res.todos)

const getTodos = () =>
    client.todos.$get()
        .then(res => res.json())
        .then(res => res.todos)

const deleteTodo = (id: string) =>
    client.todos[':id'].$delete({param: {id}})
        .then(res => res.json())
        .then(res => res.todos)

const markComplete = (id: string) =>
    client.todos[':id'].complete.$post({param: {id}})
        .then(res => res.json())
        .then(res => res.todos)

const TodoEditor = withLoginRequired(() => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState('');

    // Fetch todos on component mount
    useEffect(() => {
        getTodos().then(todos => setTodos(todos));
    }, []);

    const onAddTodo = (evt: FormEvent) => {
        evt.preventDefault();
        createTodo(newTodoText).then(todos => setTodos(todos));
        setNewTodoText('');
    };

    const onCompleteTodo = (id: string) => {
        markComplete(id).then(todos => setTodos(todos));
    };

    const onDeleteTodo = (id: string) => {
        deleteTodo(id).then(todos => setTodos(todos));
    };

    return (
        <div className="todoEditor">
            <ul>
                <form onSubmit={onAddTodo}>
                    <li>
                        <input
                            type='text'
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                        />
                        <button type="submit" className="primary">Add TODO</button>
                    </li>
                </form>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            {todo.completed ? <>✔️ <s>{todo.text}</s></> : todo.text}
                        </div>
                        <div>
                            {!todo.completed && <button onClick={() => onCompleteTodo(todo.id)}>Complete</button>}
                            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default TodoEditor;