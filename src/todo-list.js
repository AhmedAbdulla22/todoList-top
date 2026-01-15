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

    // a > b = + 
    // a < b = - 
    
    const getTodoList = () => list;
    const getCategory = () => (category !== "") ? category : "default";
    const getSortedListDesc = () => list.toSorted((todo1 , todo2) => {
        console.log(`${todo2.dueDate.etTime()} - ${todo1.dueDate} :` , todo2.dueDate - todo1.dueDate);
        return todo2.dueDate - todo1.dueDate;
    }); 
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