import React from "react";

import './ExpenseItem.css'
const ExpenseItem = (props) => {
 
    
  return (
    <>
    
    
    <div className="container">
      
      <div className="date">{props.date}</div>
      <div className="cont1">
        <div className="name">
        <h1>{props.name}</h1>
        </div>
        <div className="price">
        <h2>${props.amount}</h2>
       
        </div>
        <button onClick={()=> props.ondel(props.id)} >Delete</button>

        
      </div>
      
    </div>
    
    </>

  );
};

export default ExpenseItem;
