let nextid=2;
const todos=[{
    id:1,
    title:"Learn structured backend",
    completed:false
}];

function getalltodosservice(){
    return todos;
}
function gettodobyidservice(id){
    return todos.find((item)=>{
         return item.id===id;
    });
}
 
function createtodoservice(title){
    const newtodo={
        id:nextid++,
        title:title,
        completed:false
    };
    todos.push(newtodo);
    return newtodo;
}

function updatetodoservice(id, title, completed){
    const todoIndex=todos.findIndex((item)=>{
        return item.id===id;
    });
    if(todoIndex===-1){
        return null;
    }
    if(title!==undefined){
        todos[todoIndex].title=title;
    }
    if(completed!==undefined){
        todos[todoIndex].completed=completed;
    }
    return todos[todoIndex];
}

function deletetodoservice(id){
    const todoIndex=todos.findIndex((item)=>{
        return item.id===id;
    });
    if(todoIndex===-1){
        return false;
    }
    todos.splice(todoIndex, 1);
    return true;
}
module.exports={
    getalltodosservice,
    gettodobyidservice,
    createtodoservice,
    deletetodoservice,
    updatetodoservice
}