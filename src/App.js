import logo from './logo.svg';
import './App.css';
import  { useState } from "react"
import Box from './components/Box';

// const todo = [1, 2,3,4,5]
// const inProgress= [6, 7];
// const inReview = [8, 9,10];
// const completed  = [11, 12, 13];
function App() {
  const [todo, setTodo] = useState([1, 2,3,4,5])
  const [inProgress, setInProgress] = useState([6, 7])
  const [inReview, setInReview] = useState([8, 9,10])
  const [completed, setCompleted] =  useState([11, 12, 13])
  const [current, setCurrent] = useState("");

  const onDrag = (e, item) =>{
    e.dataTransfer.setData("text/plain", e.target.id);
    //e.preventDefault();
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.target.id)
    setCurrent(e.target.id);
    e.preventDefault();
  }
  const onDrop = (e) =>{
    e.preventDefault()
    console.log(e.target.id)
    const list = e.target.id;
    const item = parseInt(e.dataTransfer.getData("text/plain")) || Number(current)
    console.log(item)
    setTodo((prev)=>prev.filter((pr)=> pr !== item))
    setInProgress((prev)=> prev.filter((pr)=> pr !== item))
    setInReview((prev)=>  prev.filter((pr)=> pr !== item))
    setCompleted((prev)=>  prev.filter((pr)=> pr !== item))
   if(list === 'list-one'){
    setTodo((prev)=>[...prev, item])
   }
   if(list === 'list-two'){
    setInProgress((prev)=>[...prev, item])
   }
   if(list === 'list-three'){
    setInReview((prev)=>[...prev, item])
   }
   if(list === 'list-four'){
    setCompleted((prev)=>[...prev, item])
   }
  }

  const allowDrop = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="App">
    <header>kanban board</header>
    <div className='board'>
      <div id="list-one"  onDragOver={allowDrop} onDrop={onDrop}  className="column">
        <span>To do</span>
        <div  className="column">
          {todo.map((it, index)=>{
            return(
              <Box onDrag={onDrag} data={it} />
            )
          })}

        </div>
      </div>
      <div className="column">
        <span>In Progress</span>
        <div id="list-two" onDragOver={allowDrop} onDrop={onDrop} className="column">
          {inProgress.map((it, index)=>{
            return(
              <Box onDrag={onDrag} data={it} />
            )
          })}

        </div>
      </div>
      <div id="list-three" onDragOver={allowDrop} onDrop={onDrop} className="column">
        <span>In Review</span>
        <div  className="column">
          {inReview.map((it, index)=>{
            return(
              <Box onDrag={onDrag} data={it} />
            )
          })}

        </div>
      </div>
      <div id="list-four" onDragOver={allowDrop} onDrop={onDrop} className="column">
        <span>Done</span>
        <div className="column">
          {completed.map((it, index)=>{
            return(
              <Box onDrag={onDrag} data={it} />
            )
          })}

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
