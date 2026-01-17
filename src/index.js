import "./index.css";
import { format, toDate } from "date-fns";
import { TodoList } from "./logic/todo-list";

const list1 = TodoList("study");

//add todos
list1.addTodo({title: "complete Todo functionality",description: "well make it functional blah blah blah",dueDate: new Date()});
list1.addTodo({title: "complete Semester1", dueDate: new Date(2025,8,21)});
list1.addTodo({title: "complete Semester2", dueDate: new Date(2025,1,1)});

//show list arr
console.log("list: ",list1.getTodoList());

const list = list1.getTodoList();

//remove
// list1.removeTodo(list[0].id);

//show list arr
console.log("list: ",list1.getTodoList());
console.log("sorted asc: ",list1.getSortedListByDate());
console.log("category: ",list1.getCategory());
