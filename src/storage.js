const storage = {

    save: (tasks) =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },
    load:() =>{
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        return tasks;
    }
}

export default storage;