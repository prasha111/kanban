import logo from './logo.svg';
import './App.css';
import  { useState } from "react"
import Box from './components/Box';

const todo = [1, 2,3,4,5]
const inProgress= [6, 7];
const inReview = [8, 9,10];
const completed  = [11, 12, 13];
function App() {
  const [current, setCurrent] = useState("");

  return (
    <div className="App">
    <header>kanban board</header>
    <div className='board'>
      <div className="column">
        <span>To do</span>
        <div className="column">
          {todo.map((it, index)=>{
            return(
              <Box data={it} />
            )
          })}

        </div>
      </div>
      <div className="column">
        <span>In Progress</span>
        <div className="column">
          {inProgress.map((it, index)=>{
            return(
              <Box data={it} />
            )
          })}

        </div>
      </div>
      <div className="column">
        <span>In Review</span>
        <div className="column">
          {inReview.map((it, index)=>{
            return(
              <Box data={it} />
            )
          })}

        </div>
      </div>
      <div className="column">
        <span>Done</span>
        <div className="column">
          {completed.map((it, index)=>{
            return(
              <Box data={it} />
            )
          })}

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
