import React, {useState}  from 'react'
import '../src/App.css'
import {FiXCircle, FiEdit3} from "react-icons/fi"

const todoLists =[
  {
    id : 1,
    task: "Coding",
  },
  {
    id : 2,
    task: "Reading",
  },
  {
    id : 3,
    task: "Writing",
  },
  {
    id :4,
    task: "Reviewing",
  },
  {
    id : 5,
    task: "Testing",
  },
];

 const App = () => {
   const [todoList, setTodoList] = useState(todoLists);
   const [todoInput,setTodoInput] = useState("");
   const  [todoEdit, setTodoEdit]  = useState(null);
   const  [todoEditValue, setTodoEditValue] = useState(null);


   const  handelSubmit=  () => {
    console.log(todoList, todoInput);
    setTodoList([...todoList, {id: ++todoList.length, task:todoInput}]);
   }

    const handelDelete  =(d)=> {
      console.log("Click", d);
      const removedArray = todoList.filter( (e)=> e.id !== d )
          setTodoList(removedArray);
   }

   const handelEdit = (d)=> {
    console.log(d);
    setTodoEdit(d.id);
    setTodoEditValue(d.task);
   }

   const handleEditSubmit = (d) => {
    let editA = todoList.map((todo) =>
      todo.id === d ? { id: d, task: todoEditValue } : todo
    ); 
    console.log(editA);

    setTodoList(editA);

    setTodoEdit(null);
  };


  return (
    <div >
      <div>
        <input style={{    
    width: "15rem",
    border: "none",
    borderRadius: "10px",
    padding: "5px 6px",}}
        type="text" 
        value={todoInput}
        onChange={
                    (e)=>setTodoInput(e.target.value)
                  }
        placeholder='Make a to-do list' />{" "}
        <button style={{
                backgroundColor: "royalblue",
                border: "none",
                borderRadius: "10px",
                padding: "5px 6px",}}
         onClick={handelSubmit} >Add Todo</button>
      </div>

      {todoList.map((r,i) => (
        <div   key={i} >
          { r.id === todoEdit ? 
            (<div style={{marginTop: "10px"}}>
              <input style={{    
                width: "15rem",
                border: "none",
                borderRadius: "10px",
                padding: "5px 6px",}}
              type="text" 
              value={todoEditValue}
              onChange={
                (e) => {setTodoEditValue(e.target.value);
                }}
              />{" "}
              <button style={{
                backgroundColor: "royalblue",
                border: "none",
                borderRadius: "10px",
                padding: "5px 6px",}}
              onClick={()=>handleEditSubmit(r.id)} >Edit ToDo</button>
              <FiXCircle style={{ marginLeft: "10px", color: "red" }}
              onClick={ ()=> setTodoEdit(null) } ></FiXCircle>
            </div>
            )
            : (
            <p>{r.task}</p>
            )}
          
          {r.id !== todoEdit && (
            <>
            < FiXCircle style={{ marginLeft: "10px", color: "red"  }}
            onClick={()=> handelDelete(r.id) }/>
            <FiEdit3   style={{ marginLeft: "5px", color: "green" }}
            onClick={()=> handelEdit(r)}/>
            </>
          )}
         
        </div>
      ))}
    
    </div>
  )
}
export default App