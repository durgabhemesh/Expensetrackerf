import React, { useState } from 'react';

const Filter=(props)=>{
    const [date,setDate]=useState('All')

    const filterhandler=(e)=>{
        let c=e.target.value;
        
        if(c==='Yesterday'){
            var cii=new Date().getDate()
            setDate(cii-1);

        }
        if(c==='Today'){
            var cii=new Date().getDate()
            setDate(cii);

        }
props.filter(date);
console.log(date);
    }


return(

    <>
    <select name="Days" id="Days" onChange={filterhandler}
  >
    <option value="All">All</option>
  <option value="Today">Today</option>
  <option value="Yesterday">Yesterday</option>
  
  
</select>
    </>
)
}

export default Filter;
