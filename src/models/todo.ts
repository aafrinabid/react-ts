class Todo{
    id:string;
    text:string;
    author:string;
    fullname:string;

    constructor(todoText:string,name:string){
        this.text=todoText;
        this.id=new Date().toISOString();
        this.author=name;
        this.fullname=todoText+name;

    }
    addName(){
        return this.fullname
    }
    

}

export default Todo