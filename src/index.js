import Header from "./header";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Util from "./Util";
import Repository from "./repositori";
require("./main.css");
class Page {
  constructor() {
    this.body = document.body;
    this.main = Util.createElement("div", {
      className: "main"
    });
    this.header = Header.printHeader();
    this.todoBlock = Util.createElement("div", {
      className: "todoItem"
    });
    this.addTodo = new AddTodo(this.todoBlock);
    this.main.appendChild(this.header);
    this.main.appendChild(this.todoBlock);
    this.body.appendChild(this.main);

    this.todoList = new TodoList(this.todoBlock);
  }
}

let p = new Page();
