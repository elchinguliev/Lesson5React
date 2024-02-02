import React from 'react'

export default function Car(cars) {
  return (
    <div>
    {
        cars.cars.map(c=><li style={{backgroundColor:"aquamarine", fontSize:"25px" ,display:"flex",width:"70%", height:"150px", fontWeight:"bold",color:"Highlight"}}> Model : {c.model} <br></br> Vendor : {c.vendor}<br></br> Price : {c.price} <img  style={{width:"250px",heigth:"250px"}} alt='masin sekli' src={c.image}/></li>)
    }
</div>
  )
}
