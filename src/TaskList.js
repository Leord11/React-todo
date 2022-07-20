import { Link } from "react-router-dom";

const TaskList = ({tasks, title}) => {
    return ( 
        <div className="task-list">
            <h1>{title}</h1>
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <Link to={`/task/${task.id}`}>
                        <h2> {task.title} </h2>
                        <div className="p2">
                            <p>To do: {task.task}</p>
                            <p>Status: {task.status}</p>
                        </div>
                    </Link>                    
                </div>
            ))} 
        </div>
     );
}
 
export default TaskList;