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
function addElementToDOM(type, frame = mainContainer, attributes = {}) {
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
const mainContainer = document.querySelector(".jsfwd-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
mainContainer.style.minHeight = "30vh";
let activeFrame = mainContainer;

const frames = [
  new Frame(
    "Frame 1",
    [
      new DOMElement("h2", { textContent: "Variables" }),
      new DOMElement("p", { textContent: "Something about variables I guess" }),
      new DOMElement("hr"),
      new DOMElement("h3", { textContent: "Super long text" }),
      new DOMElement("p", {
        textContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis ipsum ut turpis rhoncus aliquam. Donec vulputate aliquam dictum. Duis sit amet erat fermentum, aliquam dolor nec, rhoncus tortor. Nulla eu est id metus consectetur malesuada et tristique leo. Phasellus iaculis nulla eros, id suscipit elit elementum a. Suspendisse ut sem tempor, ultrices diam id, venenatis quam. Integer feugiat blandit ipsum, sed rutrum magna fringilla nec. Aenean nisl magna, commodo et porttitor eget, lobortis id neque. Aenean elementum feugiat sem ac dictum. Aenean maximus pellentesque eros quis faucibus. Cras eleifend tincidunt lacus, eget sodales lacus venenatis egestas. In auctor vitae diam congue facilisis. Nulla hendrerit viverra tempus. Suspendisse vel viverra turpis. Praesent ornare scelerisque magna quis blandit. Morbi ornare sem leo, id pretium leo laoreet scelerisque. Mauris non sagittis ante. Suspendisse justo turpis, luctus eget euismod ut, ultrices at augue. Fusce quis condimentum libero. Proin sit amet sem nec diam pretium sollicitudin et non eros. Maecenas auctor risus et tortor porttitor maximus. Vivamus at commodo ipsum, sed bibendum dolor. Cras finibus finibus nunc nec laoreet. Duis rutrum, mi in ultrices consequat, purus justo mattis leo, ac aliquam lorem ipsum porttitor lacus. Nunc consequat dui quis volutpat luctus. Pellentesque dui lectus, molestie vitae vestibulum ac, consectetur facilisis libero. Quisque tempus nisi nec magna gravida, quis iaculis lectus tincidunt. Integer eros magna, viverra sed venenatis sed, rutrum vitae felis. Phasellus vel accumsan lorem, at gravida ex. Vestibulum vehicula non libero quis consectetur. Duis bibendum id lorem at suscipit. Nulla facilisi. Nam mollis turpis in sodales dignissim. Suspendisse purus ipsum, iaculis eget malesuada a, fringilla in felis. Sed vel lacus vel lacus suscipit rutrum sit amet at felis. Vivamus nunc ipsum, dapibus id mollis ac, pulvinar vitae elit. Ut mattis ultrices est, id pulvinar sapien aliquam non. Morbi vel gravida justo, quis efficitur mi. Sed nibh sapien, fermentum eget placerat quis, commodo non ante. Donec sit amet placerat augue. Aenean porttitor vestibulum urna ullamcorper gravida. Fusce accumsan ex ut ornare imperdiet. Integer mollis facilisis sodales. Suspendisse magna mi, vestibulum quis sem id, finibus vestibulum arcu. Quisque tempor, est at lacinia maximus, mauris eros auctor ipsum, eget consectetur justo tortor ac mi. Ut vitae sapien sed magna semper gravida sit amet a leo. Ut non sem nec arcu consectetur tristique. Nullam neque turpis, lobortis eu dignissim ut, auctor a augue. Nam egestas, metus sit amet hendrerit pellentesque, felis eros dictum arcu, in pulvinar purus risus imperdiet diam. Nunc eu neque varius, iaculis odio quis, consequat est. Nam eget vulputate turpis.",
      }),
    ],
    mainContainer
  ),
  new Frame(
    "Frame 2",
    [new DOMElement("p", { textContent: "YOO" }), new DOMElement("h4", { textContent: "H4 HERE" })],
    mainContainer
  ),
];

function startMainScript() {
  frames[blockIndex].populate();
  const controlPanel = addElementToDOM("div", mainContainer.parentElement);
  // frames.forEach((frame) => {
  //   frame.populate();
  // });
  prevBtn.onclick = function () {
    if (blockIndex === 0) return;
    blockIndex--;
    frames[blockIndex].populate();
    mainContainer.replaceChildren(frames[blockIndex].thisFrame);
  };
  nextBtn.onclick = function () {
    if (blockIndex === frames.length - 1) return;
    blockIndex++;
    frames[blockIndex].populate();
    mainContainer.replaceChildren(frames[blockIndex].thisFrame);
  };
}

document.addEventListener("DOMContentLoaded", function () {
  // populateElements();
  startMainScript();
});
