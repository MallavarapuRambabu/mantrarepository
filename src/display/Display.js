import React from 'react'

import "./Display.css"
import {data}from "../data"
import Card from '../card/Card'
function Display({toDate,fromDate}) {
    

   
  return (
    <div className='main'>
        <h1>FORECAST</h1>
        <div className='displyData'>
        {data && data.map((obj,index)=><Card data={obj} index={index}/>)}
        </div>
      
    </div>
  )
}

export default Display
