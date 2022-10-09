import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const dayHandler = (e) => {
    setDay(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenses = {
      name: title,
      amount: price,
      // date3: new Date(day).getFullYear(),
      // date2: new Date(day).getMonth(),
      // date1: new Date(day).getDate(),
      // date11: new Date(day).getDate()+'/'+parseInt(new Date(day).getMonth())+'/'+new Date(day).getFullYear(),
      date: new Date().toDateString()
      
    };
    props.onSaveData(expenses);
    setTitle("");
    setPrice("");
    setDay("");
    console.log(expenses);
  };
  return (
    <>
      <h1 className="he1"><span className="ex">Ex</span>pense <span className="ex">Tr</span>acker</h1>
      <div className="cont">
        <form onSubmit={submitHandler}>
        <label for="fname"> Item  </label>
          <input
            type="text"
            placeholder="Type Your Item....."
            required
            value={title}
            id='fname'
            onChange={titleHandler}
          ></input>
          <br></br>
          <label for="fprice">Amount</label>
          <input
            type="number"
            placeholder="Enter Price....."
            required
            value={price}

            id='fprice'
            onChange={priceHandler}
          ></input>

          <br></br>
          {/* <input type="date" value={day}  onChange={dayHandler}></input>
          <br></br> */}
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default Form;
