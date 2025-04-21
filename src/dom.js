import { Task } from "./task.js";

// Caching of DOM Elements

const sidebar = document.querySelector("#sidebar");
const itemAllTasks = document.querySelector("#item-all");
const itemToday = document.querySelector("#item-today");
const itemThisWeek = document.querySelector("#item-week");
const itemCompleted = document.querySelector("#item-completed");
const btnNewProject = document.querySelector("#btn-new-project");


function renderAllView(){
    
}

function renderTodayView() {
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = ""; // Clear previous content

  const heading = document.createElement("h2");
  heading.textContent = "Today's Tasks";

  const ul = document.createElement("ul");

  const exampleTask = document.createElement("li");
  exampleTask.textContent = "Sample Task for Today";

  ul.appendChild(exampleTask);
  mainContent.appendChild(heading);
  mainContent.appendChild(ul);
}

function renderWeekView(){
    
}



function renderCompletedView(){
    
}

// Event Listeners

(function setUpEventListeners(){
    sidebar.addEventListener("click", (event)=>{

    });
}())

function createNewProject(){
    const dialog = document.createElement("dialog");
    const dialogContent = document.createElement("div");
    const inputTitle = document.createElement("input");
    const inputDate = document.createElement("input");
}
