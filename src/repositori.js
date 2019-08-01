import { isArray } from "util";

export default class Repository {
  static Data(value) {
    if (value !== undefined) {
      localStorage.setItem("todo", JSON.stringify(value));
    } else {
      return JSON.parse(localStorage.getItem("todo"));
    }
  }
}
