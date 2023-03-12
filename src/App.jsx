import React, {useState}  from 'react'

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
];

 const App = () => {
   const [todoList, setTodoList] = useState(todoLists);

   const [todoInput,setTodoInput] = useState("");
   const  [todoEdit, setTodoEdit]  = useState(null);
   const  [todoEditValue, setTodoEditValue] = useState(null);


   const  handelSubmit=  (e) => {
    e.preventDefault();
   setTodoList([...todoList, {id: ++todoList.length, task:todoInput}]);
   setTimeout(() => {
    alert("Success!");
   }, 1000);
  
   console.log(todoList, todoInput);
    ;
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
    let editV = todoList.map((t) =>
      t.id === d ? { id: d, task: todoEditValue } : t
    ); 
    console.log(editV);

    setTodoList(editV);

    setTodoEdit(null);
  };


  return (
    
    <div  style={{
                      width: "24rem",
                      borderRadius: "10px",
                      background:" #e5daff",
                      padding: "2rem",
                      display: "flex",
                      flexDirection:" column",
                      alignItems: "center",
                      margin: "auto",}}>
      <h1 style={{color: "green"}} >What's Your Plan Today?</h1>
      <div >
        <input style={{    
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      background: "#fbfbf7"}}
        type="text" 
        value={todoInput}
        onChange={
                    (e)=>setTodoInput(e.target.value)
                  }
        placeholder='Make a to-do list' />{" "}
        <button style={{
                        backgroundColor:" #add296",
                        border: "none",
                        fontWeight: "500",
                        borderRadius:"10px",
                        marginInlineStart: "5px",
                        padding: "10px",}}
         onClick={handelSubmit} >Add Todo</button>
      </div>

      {todoList.map((r,i) => (
        <div  style={{  
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",}} key={i} >
          { r.id === todoEdit ? 
            (<div style={{  
                          display: "flex",  marginTop: "10px"}}>
              <input  style={{    
                          border: "none",
                          borderRadius: "10px",
                          padding: "10px",}}
              type="text" 
              value={todoEditValue}
              onChange={
                (e) => {setTodoEditValue(e.target.value);
                }}
              />{" "}
              <button style={{
                            backgroundColor:" #96a4d2",
                            border: "none",
                            fontWeight: "500",
                            borderRadius:"10px",
                            marginInlineStart: "5px",
                            padding: "10px",}}
              onClick={()=>handleEditSubmit(r.id)} >Edit ToDo</button>
              <FiXCircle style={{ 
                            color:" red",
                            background: "whitesmoke",
                            marginLeft:" 10px",
                            padding: "10px",
                            borderRadius: "10px",  }}
              onClick={ ()=> setTodoEdit(null) } ></FiXCircle>
            </div>
            )
            : (
            <p>{r.task}</p>
            )}
          
          {r.id !== todoEdit && (
            <>
            < FiXCircle style={{
                            color:" red",
                            background: "whitesmoke",
                            marginLeft:" 10px",
                            padding: "10px",
                            borderRadius: "10px",  }}
            onClick={()=> handelDelete(r.id) }/>
            <FiEdit3   style={{
                            color:" green",
                            background: "#ebf77b ",
                            marginLeft:" 10px",
                            padding: "10px",
                            borderRadius: "10px",   }}
            onClick={()=> handelEdit(r)}/>
            </>
          )}
         
        </div>
      ))}
    
    </div>
  )
}
export default App