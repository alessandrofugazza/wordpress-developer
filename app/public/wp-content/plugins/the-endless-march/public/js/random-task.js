// TODO FIX THIS MESS GOT NOT TIME FOR THIS

const generatorPanel = document.querySelector(".generator-panel");
if (generatorPanel) {
  const taskCounterParagraph = generatorPanel.querySelector(".task-counter");
  let taskCounter = parseInt(localStorage.getItem("taskCounter")) || 0;
  taskCounterParagraph.textContent = taskCounter;
  const generateTaskBtn = generatorPanel.querySelector(".generate-task-btn");
  const resetTaskCounterBtn = generatorPanel.querySelector(".reset-counter-btn");
  const taskList = generatorPanel.querySelector(".quick-tasks");
  const tasks = taskList.querySelectorAll("li");
  const resultParagraph = generatorPanel.querySelector(".random-task");
  resultParagraph.style.fontWeight = "bold";
  let currentTask = localStorage.getItem("randomTask") || "";
  resultParagraph.textContent = currentTask;
  //   TODO better spacing you amateur
  generateTaskBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * tasks.length);
    let randomTask = tasks[randomIndex].textContent.trim();
    while (randomTask === currentTask) {
      randomIndex = Math.floor(Math.random() * tasks.length);
      randomTask = tasks[randomIndex].textContent.trim();
    }
    currentTask = randomTask;
    resultParagraph.textContent = currentTask;
    taskCounter += 1;
    localStorage.setItem("taskCounter", taskCounter);
    localStorage.setItem("randomTask", randomTask);
    taskCounterParagraph.textContent = taskCounter;
  });
  resetTaskCounterBtn.addEventListener("click", () => {
    taskCounter = 0;
    localStorage.setItem("taskCounter", taskCounter);
    localStorage.setItem("randomTask", "");
    taskCounterParagraph.textContent = taskCounter;
    currentTask = "";
    resultParagraph.textContent = currentTask;
  });
} else {
  console.log("No generator panel found!");
}

const realTaskGeneratorPanel = document.querySelector(".real-task-generator-panel");
if (realTaskGeneratorPanel) {
  const realTaskCounterParagraph = realTaskGeneratorPanel.querySelector(".real-task-counter");
  let realTaskCounter = parseInt(localStorage.getItem("realTaskCounter")) || 0;
  realTaskCounterParagraph.textContent = realTaskCounter;
  const generateRealTaskBtn = realTaskGeneratorPanel.querySelector(".generate-real-task-btn");
  const resetRealTaskCounterBtn = realTaskGeneratorPanel.querySelector(".reset-real-task-counter-btn");
  const realTaskList = realTaskGeneratorPanel.querySelector(".real-tasks");
  const realTasks = realTaskList.querySelectorAll("li");
  const realResultParagraph = realTaskGeneratorPanel.querySelector(".random-real-task");
  realResultParagraph.style.fontWeight = "bold";
  let realCurrentTask = localStorage.getItem("realTask") || "";
  realResultParagraph.textContent = realCurrentTask;

  //   TODO better spacing you amateur
  generateRealTaskBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * realTasks.length);
    let randomTask = realTasks[randomIndex].textContent.trim();
    while (randomTask === realCurrentTask) {
      randomIndex = Math.floor(Math.random() * realTasks.length);
      randomTask = realTasks[randomIndex].textContent.trim();
    }
    realCurrentTask = randomTask;
    realResultParagraph.textContent = realCurrentTask;
    realResultParagraph.textContent = randomTask;
    realTaskCounter += 1;
    localStorage.setItem("realTaskCounter", realTaskCounter);
    localStorage.setItem("realTask", randomTask);
    realTaskCounterParagraph.textContent = realTaskCounter;
  });
  resetRealTaskCounterBtn.addEventListener("click", () => {
    realTaskCounter = 0;
    localStorage.setItem("realTaskCounter", realTaskCounter);
    localStorage.setItem("realTask", "");
    realTaskCounterParagraph.textContent = realTaskCounter;
    realCurrentTask = "";
    realResultParagraph.textContent = realCurrentTask;
  });
} else {
  console.log("No generator panel found!");
}
