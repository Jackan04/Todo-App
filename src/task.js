import storage from "./storage.js"
import { parseISO, isToday, isPast, format } from 'date-fns';


class Task{
    
    constructor(title, date = null, projectID){
        this.id = crypto.randomUUID();
        this.title = title;
        this.date = date ? parseISO(date) : null;
        this.projectID = projectID;
        this.isCompleted = false;
        
    }

    get getTitle(){
        return this.title;
    }

    set setTitle(title){
        this.title = title;
    }

    isDueToday(){
        if(this.date){
            return isToday(this.date)
        }else{
            return false;
        }
        
    }

    isOverDue(){
        if(this.date){
            return isPast(this.date) && !this.isDueToday() && !this.isCompleted 
        }else{
            return false;
        }
    }

    get getFormattedDate(){

        if(this.date){
            this.format(this.date, 'yyyy-MM-dd')
        }else{
            return '';
        }
        
    }

    set setDate(date) {
        this.date = parseISO(date);
    }

}


export {Task}