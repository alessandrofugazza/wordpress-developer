const elements = [];

class DOMElement {
  constructor(_type, _attributes = {}) {
    this.type = _type;
    this.attributes = _attributes;
  }
}

class Frame {
  constructor(_title, _elements, _parentFrame) {
    this.title = _title;
    this.elements = _elements;
    this.parentFrame = _parentFrame;
    this.thisFrame = null; // lol
  }
  populate() {
    this.thisFrame = addElementToFrame("div", this.parentFrame, { class: "topic-frame" });
    // this.thisFrame.style.display = "none";
    // this.thisFrame.style.opacity = "0";

    this.elements.forEach((element) => {
      addElementToFrame(element.type, this.thisFrame, element.attributes);
    });
  }
  show() {
    this.thisFrame.classList.add("show");
  }
  hide() {
    this.thisFrame.classList.remove("show");
  }
}

function addElementToFrame(type, frame = activeFrame, attributes = {}) {
  const element = document.createElement(type);
  for (let key in attributes) {
    if (key === "textContent") {
      element.textContent = attributes[key];
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (frame) {
    frame.appendChild(element);
  }
  return element;
}

// BAD
function addElementToDOM(type, frame = JSFWDMainContainer, attributes = {}) {
  const element = document.createElement(type);
  for (let key in attributes) {
    if (key === "textContent") {
      element.textContent = attributes[key];
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (frame) {
    frame.appendChild(element);
  }
  return element;
}

let blockIndex = 0;
const JSFWDMainContainer = document.querySelector(".jsfwd-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
if (JSFWDMainContainer) {
  JSFWDMainContainer.style.minHeight = "70vh";
}
let activeFrame = JSFWDMainContainer;

const frames = [
  new Frame(
    "Frame 1",
    [
      new DOMElement("h2", { textContent: "Introduzione alla programmazione" }),
      new DOMElement("p", { textContent: "Tipi di dato, variabili, operatori matematici e logici." }),
      new DOMElement("hr"),
      new DOMElement("h3", { textContent: "Tipi di dato" }),
      new DOMElement("p", {
        textContent: "Cosa si intende con tipo di dato. Stringhe, numeri, booleani, null, undefined.",
      }),
      new DOMElement("h3", { textContent: "Variabili" }),
      new DOMElement("p", {
        textContent: "placeholder",
      }),
      new DOMElement("h3", { textContent: "Operatori matematici e logici" }),
      new DOMElement("p", {
        textContent: "placeholder",
      }),
    ],
    JSFWDMainContainer
  ),
  new Frame(
    "Frame 2",
    [new DOMElement("p", { textContent: "YOO" }), new DOMElement("h4", { textContent: "H4 HERE" })],
    JSFWDMainContainer
  ),
];

function startMainScript() {
  frames[blockIndex].populate();
  // frames.forEach((frame) => {
  //   frame.populate();
  // });

  prevBtn.onclick = function () {
    if (blockIndex === 0) return;
    fadeOutAndReplace("prev"); // TODO aweful but im tired
  };

  nextBtn.onclick = function () {
    if (blockIndex === frames.length - 1) return;

    // blockIndex++;
    // frames[blockIndex].populate();
    // mainContainer.replaceChildren(frames[blockIndex].thisFrame);
    fadeOutAndReplace("next");
  };
}

function fadeOutAndReplace(sequence) {
  frames[blockIndex].thisFrame.classList.add("fade-out");
  frames[blockIndex].thisFrame.addEventListener("transitionend", () => {
    if (sequence === "prev") {
      blockIndex--;
    } else {
      blockIndex++;
    }
    frames[blockIndex].populate();
    JSFWDMainContainer.replaceChildren(frames[blockIndex].thisFrame);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // populateElements();
  startMainScript();
});
