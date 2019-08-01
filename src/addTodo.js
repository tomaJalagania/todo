import Util from "./Util";
import Repository from "./repositori";
import "./css/odoBlock.css";
/*
კლასში AddTod ხდება დავალების დასამატებელი 
პანელის ფორმირება
@პარამეტრები: გადაეცემეა მშობელი HTML ელემენტი 
რომელშიც მოხდება პანელის ასახვა
*/
export default class AddTodo {
  constructor(template) {
    this.evt = Util.getEvent("addList");
    this.data = Repository.Data() ? Repository.Data() : [];

    this.blcok = Util.createElement("div", {
      className: "todoBlock"
    });
    this.btn = Util.createElement("button", {
      className: "todoBtn",
      textContent: "Add",
      event: "click",
      cb: () => {
        let todovalue = document.getElementById("todo").value;
        let todo = {
          value: todovalue,
          date: new Date().toLocaleDateString()
        };
        this.data.push(todo);
        Repository.Data(this.data);
        document.dispatchEvent(this.evt);
        document.getElementById("todo").value = "";
      }
    });
    this.input = Util.createElement("input", {
      type: "text",
      className: "todoInput",
      id: "todo"
    });
    this.blcok.appendChild(this.btn);
    this.blcok.appendChild(this.input);
    template.appendChild(this.blcok);
  }
}
