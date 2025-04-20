class Project{
    constructor(title, projectID){
        // this.projectID = crypto.randomUUID();
        this.projectID = projectID;
        this.title = title;
        
    }

    getProjectTasks(tasks){
        return tasks.filter(task => task.projectID === this.projectID);
    }


}

        
    


export {Project};