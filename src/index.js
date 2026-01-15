import { format, toDate } from "date-fns";
import { TodoList } from "./todo-list";

<<<<<<< HEAD
const list1 = TodoList("study");
=======
const list1 = TodoList();
const list2 = TodoList("study");
>>>>>>> 63eab97a2b81863e510a652a83d5f0d0036dcd2e

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
<<<<<<< HEAD
console.log("sorted asc: ",list1.getSortedListAsc());
console.log("sorted desc: ",list1.getSortedListDesc());
console.log("category: ",list1.getCategory());
=======
console.log("category: ",list1.getCategory());
console.log("category: ",list2.getCategory());
>>>>>>> 63eab97a2b81863e510a652a83d5f0d0036dcd2e
