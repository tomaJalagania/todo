export default class Util {
  static createElement(tagname, props) {
    let tag = document.createElement(tagname);

    if (props) {
      Object.keys(props).forEach(key => {
        if (key === "event") {
          tag.addEventListener(props[key], props["cb"]);
        }
        if (key === "data") {
          tag.setAttribute("data-key", props["data"]);
        }
        tag[key] = props[key];
      });
    }

    return tag;
  }
  static getEvent(value) {
    return new Event(value);
  }
}
