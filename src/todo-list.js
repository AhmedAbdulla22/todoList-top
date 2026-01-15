import { Todo } from "./todo";

export function TodoList(category = "") {
    let list = [];

    function addTodo({title = "",description = "",dueDate = new Date(),priority = 0,notes = "",isCompleted = false} ) {
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
    const getCategory = () => (category !== "") ? category : "default";
    
    //Newest To Oldest
    const getSortedListDesc = () => list.toSorted((todo1 , todo2) => todo2.dueDate - todo1.dueDate); 
    //Oldest To Newest 
    const getSortedListAsc = () => list.toSorted((todo1 , todo2) => todo1.dueDate - todo2.dueDate); 

    return {
        addTodo,
        removeTodo,
        modifyTodo,
        getTodoList,
        getCategory,
        getSortedListAsc,
        getSortedListDesc
    }

}