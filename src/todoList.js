import Util from "./Util";
import Repository from "./repositori";
require("./css/todoList.css");
/*
კლასი TodoList 
  @პარამეტრი: მშობელი HTML ობიექტი, რომელშიც ხდება TodoList ობიექტის ჩასმა
*/
export default class TodoList {
  constructor(parent = undefined) {
    // ხდება ლოკალური საცავიდან ჩანაწერების ამოღება
    // წარუმატებლობის შემთხვევაში this.data ინიციირდება როგორც ცარიელი მასივი
    this.data = Repository.Data() ? Repository.Data() : [];

    // TodoList ობიექტის შექმნა მშობელ ობიექში ჩამატება
    this.list = Util.createElement("div", {
      className: "todoList"
    });

    parent.appendChild(this.list);
    ////////////////////////////////////
    this.updateList();
    document.addEventListener("addList", this.updateList.bind(this));
  }
  /*
    updateList მეთოდი ლოკალური საცავიდან მიღებულ ინფორმაციაზე 
    დაყრდნობით ქმნის დავალებათა ცხრილს და ამატებს TodoList ობიექტში
  */
  updateList() {
    // მეთოდის დასაწყისი ხდება მშობელი ობიექტის გასუფთავება,
    // რათა არ მოხდეს დავალებების დუბლირება
    this.list.innerHTML = "";

    // ლოცალური საცავადიან ინფორმაციის მიღება
    this.data = Repository.Data() ? Repository.Data() : [];

    // დავალებების ფორმირება
    this.data.forEach((element, key) => {
      let todoListItme = Util.createElement("div", {
        className: "todoListItem",
        data: key
      });

      let chkbx = Util.createElement("input", {
        type: "checkbox",
        className: "chkbx",
        event: "change",
        cb: this.netxSiblingUnderline
      });
      let todoText = Util.createElement("span", {
        className: "todoText",
        textContent: `${element.value}: ${element.date}`
      });
      let deleteBtn = Util.createElement("button", {
        className: "dltBtn",
        textContent: "Delete",
        disabled: true,
        event: "click",
        cb: this.todoRemove.bind(this)
      });
      todoListItme.appendChild(chkbx);
      todoListItme.appendChild(todoText);
      todoListItme.appendChild(deleteBtn);
      this.list.appendChild(todoListItme);
    });
  }
  todoRemove(e) {
    let key = e.target.parentNode.dataset.key;

    this.data.splice(key, 1);

    e.target.parentNode.remove();
    Repository.Data(this.data);
  }
  netxSiblingUnderline(e) {
    if (e.target.checked) {
      e.target.nextSibling.style.textDecoration = "line-through";
      console.log(e.target.nextSibling.nextSibling);
      e.target.nextSibling.nextSibling.removeAttribute("disabled");
    } else {
      e.target.nextSibling.style.textDecoration = "none";
      e.target.nextSibling.nextSibling.setAttribute("disabled", "");
    }
  }
}
