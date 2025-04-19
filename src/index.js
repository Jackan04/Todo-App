import "./styles.css";
import {Task} from "./task.js";
import {taskStorage, projectStorage} from "./storage.js";
import {Project} from "./project.js";

const tasks = taskStorage.load();
const projects = projectStorage.load();
const project1 = new Project("Project1", "1234");
projects.push(project1);

const task1 = new Task("Try this", null, "1234");
tasks.push(task1);
projectStorage.save(projects);
taskStorage.save(tasks);






