const taskStorage = {
    
    save: (tasks) =>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Tasks saved!");
    },
    load:() =>{
        const tasksData = localStorage.getItem("tasks");
        if (!tasksData) {
            return []; 
        }
        try {
            return JSON.parse(tasksData);
        } catch (error) {
            console.error("Failed to load tasks from localStorage:", error);
            return []; 
        }
       
    }
}

const projectStorage = {
    save: (projects) =>{
        localStorage.setItem("projects", JSON.stringify(projects));
        console.log("Projects saved!");
    },
    load:() =>{
        const projects = localStorage.getItem("projects");
        
        if(!projects){
            return [];
        }

        try{
            return JSON.parse(projects)
        }catch(error){
            console.log("Failed to load projects from localStorage", error)
            return [];
            
        }


       
       
    }
}

export {taskStorage, projectStorage};