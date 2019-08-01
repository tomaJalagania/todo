import Util from "./Util";
require("./css/header.css");
export default class Header {
  static printHeader() {
    let header = Util.createElement("header", {
      className: "header"
    });
    let h1 = Util.createElement("h1", {
      textContent: "დავალებათა ცხრილი"
    });
    header.appendChild(h1);

    return header;
  }
}
