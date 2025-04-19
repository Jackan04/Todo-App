import "./styles.css";
import {Task} from "./task.js";
import {taskStorage, projectStorage} from "./storage.js";
import {Project} from "./project.js";

let tasks = taskStorage.load();

const title = prompt("Ange titel")
const projectID = prompt("Ange projektID");
const newTask = new Task(title, null, projectID);
tasks.push(newTask)
taskStorage.save(tasks);


// const project1 = new Project("Project1", "1234");
// projects.push(project1);

// const task1 = new Task("Try this", null, "1234");
// const task2 = new Task("This is a test and should not be in a project", null, "123456");
// tasks.push(task1);
// tasks.push(task2);
// projectStorage.save(projects);
// taskStorage.save(tasks);

// console.log("These tasks are in project 1\n"+ project1.logTasks(tasks))

// projects.forEach(project => {
//     console.log(project);
// });





