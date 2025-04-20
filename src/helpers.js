function deleteTask(tasklist, taskID){
    return tasklist.filter(task => task.id !== taskID )
}

export {deleteTask};