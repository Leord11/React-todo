import useFetch from "./useFetch";
import TaskList from "./TaskList";

const Home = () => {
    const { data:tasks, isPending, error} = useFetch("https://leord11.github.io/React-todo/tasks");
    
    return (
        <div className="home">
            { error && <div> {error} </div>}
            {isPending && <div>Loading ... </div>}
            {tasks && <TaskList tasks={tasks} title="All tasks"/>}    
        </div>
    );
}
 
export default Home;
