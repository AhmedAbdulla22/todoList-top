import { Todo } from "./todo";

export function TodoList() {
    let list = [];

    function addTodo(title,description = "",dueDate = new Date(),priority = 0,notes = "",isCompleted = false) {
        const todo = Todo(title,description,dueDate,priority,notes,isCompleted) 
        
        list.push(todo);
    }
    
    function removeTodo(todoId) {
        list = list.filter((todo) => todo.id !== todoId);
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