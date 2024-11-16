import React, {useState} from 'react'

function ToDoList() {
 
 const [tasks, setTasks] = useState([]);
 const [newTasks, setNewTask] = useState("");


function handleinputchange(event){
    setNewTask(event.target.value);
}

function addtask(){
   if(newTasks.trim() !== ""){
    setTasks(t=>[...t , newTasks]);
    setNewTask("");
   }
   
    

}

function deletetask(index){
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTasks(updatedtask);
}


function movetaskup(index){
    if(index > 0){

   
        const updatedtask = [...tasks];
        [updatedtask[index], updatedtask[index - 1]] = 
        [updatedtask[index-1],updatedtask[index]];
        setTasks(updatedtask);

    }
}
function movetaskdown(index){
    if(index < tasks.length -1){

   
        const updatedtask = [...tasks];
        [updatedtask[index], updatedtask[index + 1]] = 
        [updatedtask[index+1],updatedtask[index]];
        setTasks(updatedtask);

    }
}












 return(

<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
        <input
        type="text"
        placeholder='Enter a task...'
        value={newTasks}
        onChange={handleinputchange}
        
        
        
        />

        <button
        className="add-button"
        onClick={addtask}>
            
            Add
        </button>
    </div>

    <ol>
        {tasks.map((task, index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onClick={() => deletetask(index)}>
                    Delete
                </button>
                <button className="move-button"
                onClick={() => movetaskup(index)}>
                    &#8593;
                </button>
                <button className="move-button"
                onClick={() => movetaskdown(index)}>
                    &#8595;
                </button>
            </li>
        )}
    </ol>
</div>














 );

}

export default ToDoList;

