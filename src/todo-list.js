import { Todo } from "./todo";

export function todoList() {
    const list = [];

    function addTodo(title,description,dueDate,priority,notes,isCompleted) {
        const todo = Todo(title,description,dueDate,priority,notes,isCompleted) 
        
        list.push(Todo);
    }
    
    function removeTodo(todoId) {
        list = list.filter((todo) => todo.id !== todoId) 
    }
    
    function modifyTodo(todoId, modifiedTodo) {
        list.forEach((todo) => {
            if (todoId === todoId) {
                todo = modifiedTodo;
            }
        })
    }
    
    const getTodoList = () => list;

    return {
        addTodo,
        removeTodo,
        modifyTodo,
        getTodoList
    }

}