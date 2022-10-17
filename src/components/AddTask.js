import {useState} from 'react'




const AddTask = () => {
    const [task,setTask] = useState({task:"",
date:"",
isDone:false }
)
const handleTask=(e)=>{
    setTask({...task,[e.target.id]:e.target.value})
}


  return (
    <form className='container'>
      <label htmlFor="text">Task</label> <br />
      <input type="text" id='text' value={task.task}  required/>
     <br />
     <br />
      <label htmlFor="day_time">Add Date ⏳ Time</label> <br />
      <input type="date" id='day_time' value={task.date}  required/>
<br />
<br />
      <button onClick={handleTask}>Save Task</button>
    </form>
  )
}

export default AddTask
