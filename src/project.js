import {Task} from "./task.js";

class Project{
    constructor(title, projectID){
        // this.projectID = crypto.randomUUID();
        this.projectID = projectID;
        this.title = title;
        
    }

    logTasks(tasks){
        return tasks.filter(task => task.projectID === project.projectID);
    }


}

        
    


export {Project};