import { parseISO, isToday, isPast, format } from 'date-fns';


class Task{
    
    constructor(title, date = null, projectID){
        this.id = crypto.randomUUID();
        this.title = title;
        this.date = date ? parseISO(date) : null;
        this.projectID = projectID;
        this.isCompleted = false;
        
    }

    get title(){
        return this._title;
    }

    set title(title){
        this._title = title;
    }

    set date(date) {

        if(typeof date === "string"){
            this._date = parseISO(date);
        }
        else if(date instanceof Date){
            this._date = date;
        }
        else{
            this._date = null;
        }
    }

    get date(){
        return this.date;
    }

    markCompleted(){
        if(!this.isCompleted){
            return this.isCompleted = true;
        }else{
            return this.isCompleted = false;
        }
    }

    // Date handling with date-fns
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

    get formattedDate(){

        if(this.date){
            this.format(this.date, 'yyyy-MM-dd')
        }else{
            return '';
        }
        
    }

}


export {Task}