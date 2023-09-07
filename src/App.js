import logo from './logo.svg';
import './App.css';
import React,{useState}from "react"
import Display from './display/Display';
import Card from './card/Card';
import {data}from "./data"
function App() {
  let [fromDate ,setFromDate] = useState(new Date())
  let [toDate ,setToDate] = useState('')
  let [filterDate ,setfilterDtat] = useState([])
  const fromChangeHandel = (e)=>{
    let name =e.target.value
    let name2 =name.split("-")
    console.log(name2[2])
    console.log(e.target.value)
    setFromDate(e.target.value)
  }
  const toChangeHandel = (e)=>{
    console.log(e.target.value) 
    setToDate(e.target.value)
  }
  const submited = ()=>{
  
  if(fromDate <= toDate ){
    setfilterDtat(data)
  }else {
    alert("select only select 7 days ")
  }

  }
  return (
    <div>
    <div className="App">
      
     <div>
      <label>From</label>
      
      <input type="date" value={fromDate} onChange={fromChangeHandel}></input>
     </div>
      <div>
      <label>To</label>
      <input type="date" value={toDate} onChange={toChangeHandel}></input>
     </div>
     <div>
      <button type='botton' onClick={submited}>submit</button>
     </div>
     
    </div>
    {/* <Display fromDate={fromDate} toDate={toDate}/> */}
    <div className='main'>
        <h1>FORECAST</h1>
        <div className='displyData'>
        {filterDate && filterDate.map((obj,index)=><Card data={obj} index={index}/>)}
        </div>
      
    </div>
    {/* <Card/> */}
    </div>
  );
}

export default App;
