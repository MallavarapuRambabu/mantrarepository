import React from 'react'
import "./card.css"
function Card({data,index}) {
  console.log(data)
  return (
    <div className='carddata' key={index}>
      <div className='selectdate'>{data.day}</div>
      <div className='temp'>{data.temp}</div>
      <div className='picture'>
        <img src={data.image} width={50}/>
      </div>
      <div className='message'>{data.message}</div>
      
    </div>
  )
}

export default Card
