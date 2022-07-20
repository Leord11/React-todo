import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from "./Create.js";
import Home from './Home.js';
import Navbar from "./Navbar.js";
import TaskDetails from "./TaskDetails.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/task/:id" element={<TaskDetails/>} />
          <Route  path="/create" element={<Create/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
