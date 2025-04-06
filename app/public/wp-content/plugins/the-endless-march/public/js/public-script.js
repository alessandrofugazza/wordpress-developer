document.addEventListener("DOMContentLoaded", function () {
  console.log("PUBLIC JS READY");
  const playground = document.querySelector(".playground");
  //   let elements = document.getElementsByClassName("playground");
  //   arrElements = Array.from(elements);
  //   numberOfElements = arrElements.length;
  //   console.log(`${numberOfElements} element${numberOfElements > 1 ? "s" : ""} found!`);
  //   Array.from(elements).forEach((element) => {
  //     console.log(element.innerHTML);
  //   });
  //   let querySelectedElement = document.querySelector(".playground");
  //   console.log("This was query selected: ", querySelectedElement.innerHTML);
  //   let querySelectedElements = document.querySelectorAll(".playground");
  //   console.log(querySelectedElements);
  //   querySelectedElements.forEach((element) => {
  //     console.log(element.innerHTML);
  //   });
  //   console.log(elements);
  if (playground) {
    // let newCode = document.createElement("code");
    // newCode.textContent = "This is a code tag coming from my plugin.";
    // playground.appendChild(newCode);
    // let newParagraph = document.createElement("p");
    // newParagraph.textContent = "This is a paragraph tag coming from my plugin.";
    // newParagraph.style.color = "pink";
    // newParagraph.style.fontSize = "xx-large";
    // newParagraph.style.backgroundColor = "blue";
    // playground.appendChild(newParagraph);
    // let newButton = document.createElement("button");
    // const btnFunction = () => {
    //   alert("Good job!");
    // };
    // newButton.textContent = "Click me!";
    // // newButton.onclick = btnFunction;
    // newButton.addEventListener("click", btnFunction);
    // playground.appendChild(newButton);
    // let mouseOverDiv = document.createElement("div");
    // mouseOverDiv.textContent = "Mouse over me!";
    // mouseOverDiv.style.padding = "10px";
    // mouseOverDiv.style.border = "1px solid black";
    // mouseOverDiv.style.backgroundColor = "yellow";
    // mouseOverDiv.addEventListener("mouseover", () => {
    //   mouseOverDiv.style.backgroundColor = "red";
    // });
    // mouseOverDiv.addEventListener("mouseleave", () => {
    //   mouseOverDiv.style.backgroundColor = "yellow";
    // });
    // playground.appendChild(mouseOverDiv);
    // let boringTextNode = document.createTextNode("Boring...");
    // playground.appendChild(boringTextNode);
    // let boringH3 = document.createElement("h3");
    // playground.appendChild(boringH3);
    // playground.removeChild(boringH3);
    // let anotherP = document.createElement("p");
    // anotherP.textContent = "This is another paragraph.";
    // playground.appendChild(anotherP);
    // pS = document.getElementsByTagName("p");
    // console.log(pS);
    const stuffToAppend = [];
    const appendStuff = (stuff) => {
      stuffToAppend.push(stuff);
    };
    const makeMessageP = (id) => {
      const message = document.createElement("p");
      message.setAttribute("id", id);
      appendStuff(message);
    };
    const makeHr = () => {
      const hr = document.createElement("hr");
      appendStuff(hr);
    };
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "number");
    formInput.setAttribute("min", "50");
    formInput.setAttribute("max", "100");
    formInput.setAttribute("id", "age");
    // playground.appendChild(formInput);
    const validationMessage = document.createElement("p");
    // playground.appendChild(message);
    const formBtn = document.createElement("button");
    formBtn.textContent = "Check input";
    formBtn.setAttribute("type", "button");
    formBtn.addEventListener("click", () => {
      if (formInput.checkValidity()) {
        validationMessage.textContent = "✅ Input is valid!";
        validationMessage.style.color = "green";
      } else {
        validationMessage.textContent = "❌ Input is invalid: " + formInput.validationMessage;
        validationMessage.style.color = "red";
      }
    });
    // playground.appendChild(formBtn);
    // const BOMManipulationBtn = document.createElement("button");
    // BOMManipulationBtn.textContent = "BOM Manipulation";
    // BOMManipulationBtn.setAttribute("type", "button");
    // BOMManipulationBtn.addEventListener("click", () => {
    //   console.log(window.navigator.online);
    // });
    // playground.appendChild(BOMManipulationBtn);

    appendStuff(formInput);
    appendStuff(validationMessage);
    appendStuff(formBtn);
    // appendStuff(BOMManipulationBtn);
    makeHr();
    makeMessageP("message1");

    stuffToAppend.forEach((stuff) => {
      playground.appendChild(stuff);
    });
  } else {
    console.log("No playground found!");
  }
});
