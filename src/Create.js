import { useState } from "react";

const Create = () => {
    const [ title, setTitle] = useState('');
    const [ task, setTask ] = useState('');
    const [ isPending, setIsPending] = useState(false);
    const status = "ongoing";

    const handleSubmit = (e) => {
        e.preventDefault();
        const addTask = { title, task, status};
        setIsPending(true);

        fetch('http://localhost:8001/tasks',{
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(addTask)
        }).then(() => {
            console.log('new task added');
            setIsPending(false);
        })

    }

    return (
      <div className="create">
        <h2>Add a new task</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Task</label>
            <textarea type="text" required value={task} onChange={(e) => setTask(e.target.value)} />
            {!isPending && <button className="btn-update">Add task</button>}
            {isPending && <button className="btn-update">Adding task..</button>}
        </form>
      </div>  
    );
}
 
export default Create;