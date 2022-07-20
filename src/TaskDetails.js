import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const TaskDetails = () => {
    
    const {id} = useParams();
    const {data:task1, isPending, error} = useFetch('http://localhost:8001/tasks/'+ id);
    
    const [status, setStatus] = useState('');
    const [ title, setTitle] = useState('');
    const [ task, setTask ] = useState('');
    // let title = task1.title;
    // let task = task1.task;


    const handleSubmit = (e) => {
        e.preventDefault();
        // setTitle(task1.title);
        console.log(title);
        console.log(task);
        const addTask = { title,task,status };


        fetch('http://localhost:8001/tasks/'+ id, {
            method:'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(addTask)
        }).then(() => {
            console.log('new blog added');

              
        })  

    };
    const handleDelete = () => {
        fetch('http://localhost:8001/tasks/'+ id,
        {
            method:'DELETE'
        }).then(() => {
            console.log('deleted successfully');
           
        })
    }
    
    return ( 
        <div className="task-details">
            { error && <div> {error} </div>}
            {isPending && <div>Loading ... </div>}
            {task1 && (
                <article>
                    <h2> {task1.title} </h2>
                    <p>Task: {task1.task}</p>
                    <form onSubmit={handleSubmit}>
                        
                        
                        <label>Status:</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="ongoing">ongoing</option>
                            <option value="complete">complete</option>                     
                        </select>

                        <button className="btn-update" onClick={() => {
                            alert("Confirm update?");
                            setTitle(task1.title);
                            setTask(task1.task);
                        }}>Update</button>

                        

                    </form>
                    <button className="btn-delete" onClick={() => {
                        alert("Confirm Delete?");
                        handleDelete();
                    }}>Delete</button>
                    
                </article>
            )}
        </div>
     );
}
 
export default TaskDetails;