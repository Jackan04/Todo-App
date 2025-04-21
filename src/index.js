import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Task} from "./task.js";
import {taskStorage, projectStorage} from "./storage.js";
import {Project} from "./project.js";
import { deleteTask } from "./helpers.js";
import {}

let tasks = taskStorage.load();
let projects = projectStorage.load();
const project1 = new Project("Project 1", "123");
projects.push(project1);
projectStorage.save(projects)

const task1 = new Task("Fix car", null, "123");
tasks.push(task1);
const task2 = new Task("Get helmet", null, "1235");
tasks.push(task2);
taskStorage.save(tasks);

tasks = deleteTask(tasks, task2.id);
taskStorage.save(tasks);



const projectTasks = project1.getProjectTasks(tasks);

projectTasks.forEach(task => {
    console.log(task.title);
});







