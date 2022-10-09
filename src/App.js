
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import Form from './Components/Form';
import Error from "./Components/Error";
import { useEffect, useState } from "react";
import React   from 'react';
import Filter from "./Components/Filter";


const getLocalItems=()=>{
  let list=localStorage.getItem('lists')
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}


const App = () => {
  //  const data=[{
  //   id: 'e1',
  //   date: new Date(),
  //   name: 'Happy Tracking',
  //   amount: 'NA'
  // }
  
  // },
  // {
  //   id: 'e2',
  //   date: new Date(2000,12,7),
  //   name: 'Washing Machine',
  //   amount: 220
  
  // },
  // {
  //   id: 'e3',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // },
  // {
  //   id: 'e4',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // },
  // {
  //   id: 'e5',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // }
  
  // ];
 
  
const[fexp,setFexp]=useState(getLocalItems());
useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(fexp));
  addsum();
  
},[fexp])
// getSavedItems();
// useEffect(()=>{
//   getSavedItems();
// },[]);
const saveform=(enteredData)=>{
  const expenseData={
    ...enteredData,
    id: Math.random().toString()
  
  }
  setFexp((prevfdatai)=>{
    return [expenseData,...prevfdatai]
  })

  
};

const delHandler=(removeValue)=>{
const newtod=fexp.filter((todo,index)=> index!==removeValue)
setFexp(newtod)

}

const [count,setCount]=useState(0)
const addsum=()=>{
  let sum=0;
  fexp.forEach((value)=>{
    sum+=parseInt(value.amount);
  
  })
  
  setCount(sum);
  }

  // const getFilter=(filter)=>{

  //   const filterone=fexp.filter((todo)=>
  //     todo.date.getDate()===filter
  //   )


  // }
  
  return (
    <>

      <Form ondel={delHandler}  onSaveData={saveform}/>
      {/* <Filter filter={getFilter}/> */}
      
      <div className="ta">
      <h3>Total Amount: <span className="tai">${count}</span></h3>
      </div>
      {/* <h3>Total Amount:{count}</h3> */}
      
      {/* <h2 className="h21">Total: {fexp.map((el)=>el.amount+)}</h2> */}
      {fexp.length===0 ? <Error /> : (fexp.map((el,index)=> <ExpenseItem ondel={delHandler}   name={el.name} id={index} key={el.id} amount={el.amount} date={el.date} />))}
      {/* {fexp.map((el,index)=> <ExpenseItem ondel={delHandler} name={el.name} id={index} key={el.id} amount={el.amount} date={el.date} />)} */}
      
    </>
  );
};

export default App;
