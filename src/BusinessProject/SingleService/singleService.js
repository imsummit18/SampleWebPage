import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import serviceData from '../Service/serviceData'
import { Link } from 'react-router-dom'
import './singleService.css'
const SingleService = () => {
    const [loading,setLoading]=useState(false)
const {id}=useParams()
const ShowItems=(value)=>{
    return(
        <>
  <div className="single-items">
          
  <img src={value.img} alt=""  className='service-img2'/>
  <div className="bottom-desc-single-items">
  <p className='title'>{value.title}</p>
    <p className='desc'>{value.desc}</p>
  <Link to='/contact'>  <button className='btn btn-order'>Order Now</button></Link>
  </div>
  </div>
        </>
    )
}


  return (
   <>
<div className="single-item-container">
{ShowItems(serviceData[id-1])}

</div>

   </>
  )
}

export default SingleService