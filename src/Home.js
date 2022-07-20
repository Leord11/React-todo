import useFetch from "./useFetch";
import TaskList from "./TaskList";

const Home = () => {
    const { data:tasks, isPending, error} = useFetch("http://localhost:8001/tasks");
    
    return (
        <div className="home">
            { error && <div> {error} </div>}
            {isPending && <div>Loading ... </div>}
            {tasks && <TaskList tasks={tasks} title="All tasks"/>}    
        </div>
    );
}
 
export default Home;
