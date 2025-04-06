// let activeFrame = null;
// const elements = [];

// class DOMElement {
//   constructor(_type, _attributes, _parent) {
//     this.type = _type;
//     this.attributes = _attributes;
//     this.parent = _parent;
//   }
// }

// function addElement(type, attributes, frame = activeFrame) {
//   const element = document.createElement(type);
//   for (let key in attributes) {
//     if (key === "textContent") {
//       element.textContent = attributes[key];
//     } else {
//       element.setAttribute(key, attributes[key]);
//     }
//   }
//   if (parent) {
//     frame.appendChild(element);
//   }
//   return element;
// }

// const mainContainer = document.querySelector(".jsfwd-container");

// activeFrame = mainContainer;

// elements.push([new DOMElement("p", { textContent: "YO" })]);
