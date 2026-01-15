import { format, toDate } from "date-fns";
import { TodoList } from "./todo-list";

const list1 = TodoList();

//add todos
list1.addTodo("complete Todo functionality","well make it functional blah blah blah",new Date(),0,"",false);
list1.addTodo("complete Semester1");
list1.addTodo("complete Semester2");

//show list arr
console.log("list: ",list1.getTodoList());

const list = list1.getTodoList();
 
//remove
list1.removeTodo(list[0].id);

//show list arr
console.log("list: ",list1.getTodoList());
