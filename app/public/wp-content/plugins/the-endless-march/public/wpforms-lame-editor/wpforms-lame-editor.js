// TODO atwindow load
// TODO add safe checks

const mainContainer = document.querySelector(".lame-editor-container");
const form = mainContainer.querySelector("form");
const submitButton = form.querySelector(".wpform-lame-submit-btn");
const dataDisplayContainer = document.querySelector(".data-display-container");

submitButton.style.display = "none";

// // form elements
// // text
const formText = form.querySelector(".wpform-lame-text input");
const formTag = form.querySelector(".wpform-lame-html-tag");
const formStyle = form.querySelector(".wpform-lame-style-checkboxes");
// formText.type = "text";
// formText.placeholder = "Scrivi qualcosa …";
// formElements.push(formText);

const lameSubmitBtn = document.createElement("button");
lameSubmitBtn.type = "submit";
lameSubmitBtn.textContent = "Aggiungi";

const lameEraseBtn = document.createElement("button");
lameEraseBtn.type = "button";
// lameEraseBtn.style.backgroundColor = "red";
// lameEraseBtn.style.color = "white";
// lameEraseBtn.style.cursor = "pointer";
// lameEraseBtn.style.paddingInline = "15px";
// lameEraseBtn.style.fontFamily = "inherit";
// lameEraseBtn.style.fontSize = "17px";
// lameEraseBtn.style.height = "41px";

// lameEraseBtn.addEventListener("mouseover", function () {
//   lameEraseBtn.style.backgroundColor = "darkred";
// });

// lameEraseBtn.addEventListener("mouseout", function () {
//   lameEraseBtn.style.backgroundColor = "red";
// });

btnDiv = document.createElement("div");
btnDiv.style.display = "flex";
btnDiv.style.gap = "10px";

btnDiv.appendChild(lameSubmitBtn);
// appending this here bc copy styles requires the element to be rendereed I CANNOT BOTHER WITH MANUALLY COPYING THE STYLE
form.appendChild(btnDiv);

const sourceElement = lameSubmitBtn;
const targetElement = lameEraseBtn;

const computedStyles = window.getComputedStyle(sourceElement);

for (let prop of computedStyles) {
  targetElement.style[prop] = computedStyles.getPropertyValue(prop);
}

lameEraseBtn.style.backgroundColor = "red";
lameEraseBtn.addEventListener("mouseover", function () {
  lameEraseBtn.style.backgroundColor = "darkred";
});

lameEraseBtn.addEventListener("mouseout", function () {
  lameEraseBtn.style.backgroundColor = "red";
});

lameEraseBtn.textContent = "Cancella tutto";

lameEraseBtn.style.width = "auto";

lameEraseBtn.addEventListener("click", function () {
  localStorage.removeItem("lameData");
  while (dataDisplayContainer.firstChild) {
    dataDisplayContainer.removeChild(dataDisplayContainer.firstChild);
  }
});
// btnDiv.appendChild(lameEraseBtn);

btnDiv.appendChild(lameEraseBtn);

form.onsubmit = function (event) {
  event.preventDefault();
  // window.alert("Form submitted!");
  const text = formText.value;
  const selectedTag = formTag.querySelector(".wpforms-selected input");
  const tag = selectedTag.value;
  const selectedStyles = Array.from(formStyle.querySelectorAll("input[type='checkbox']:checked")).map((checkbox) =>
    checkbox.value.toLowerCase()
  );

  if (text.trim() !== "" && tag.trim() !== "") {
    const formData = { text, tag, style: selectedStyles };
    let lameStoredData = JSON.parse(localStorage.getItem("lameData")) || [];
    lameStoredData.push(formData);
    localStorage.setItem("lameData", JSON.stringify(lameStoredData));
  }
};

const loadData = () => {
  const lameStoredData = JSON.parse(localStorage.getItem("lameData")) || [];
  lameStoredData.forEach((element) => {
    const newElement = document.createElement(element.tag);
    newElement.textContent = element.text;
    if (element.style.includes("grassetto")) {
      newElement.style.fontWeight = "bold";
    }
    if (element.style.includes("corsivo")) {
      newElement.style.fontStyle = "italic";
    }
    dataDisplayContainer.appendChild(newElement);
  });
};

window.addEventListener("load", function () {
  loadData();
});

// // tag
// const tagSelect = document.createElement("select");
// const tags = ["p", "code", "h2", "h3", "h4", "h5", "h6"];
// tags.forEach((tag) => {
//   const option = document.createElement("option");
//   option.value = tag;
//   option.textContent = tag;
//   tagSelect.appendChild(option);
// });
// formElements.push(tagSelect);

// // bold
// const boldCheckbox = document.createElement("input");
// boldCheckbox.type = "checkbox";
// boldCheckbox.id = "bold-checkbox";
// const boldLabel = document.createElement("label");
// boldLabel.htmlFor = "bold-checkbox";
// boldLabel.textContent = "Bold";

// formElements.push(boldCheckbox);
// formElements.push(boldLabel);

// // italic
// const italicCheckbox = document.createElement("input");
// italicCheckbox.type = "checkbox";
// italicCheckbox.id = "italic-checkbox";
// const italicLabel = document.createElement("label");
// italicLabel.htmlFor = "italic-checkbox";
// italicLabel.textContent = "Italic";

// formElements.push(italicCheckbox);
// formElements.push(italicLabel);

// // submit button
// const addButton = document.createElement("button");
// addButton.type = "submit";
// addButton.textContent = "Aggiungi";
// formElements.push(addButton);

// // font size
// const fontSizeInput = document.createElement("input");
// fontSizeInput.type = "number";
// fontSizeInput.placeholder = "Font size (px)";
// fontSizeInput.min = "8";
// fontSizeInput.max = "28";
// fontSizeInput.value = "11";
// // TODO check validity
// formElements.push(fontSizeInput);

// formElements.forEach((element) => {
//   appendFormElement(element);
// });

// mainContainer.appendChild(elementEditorForm);

// elementEditorForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const tag = tagSelect.value;
//   const text = formText.value;
//   const isBold = boldCheckbox.checked;
//   const isItalic = italicCheckbox.checked;
//   const fontSize = fontSizeInput.value;

//   if (text.trim() !== "") {
//     const newElement = document.createElement(tag);

//     newElement.textContent = text;

//     if (isBold) {
//       newElement.style.fontWeight = "bold";
//     }
//     if (isItalic) {
//       newElement.style.fontStyle = "italic";
//     }
//     if (fontSize) {
//       newElement.style.fontSize = `${fontSize}px`;
//     }
//     mainContainer.appendChild(newElement);
//     formText.value = "";
//   }
// });
