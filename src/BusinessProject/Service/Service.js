import React,{useState} from 'react'
import serviceData from './serviceData'
import './service.css'
import { Link } from 'react-router-dom'
import Footer from '../footer'
const Service = () => {
  // const [data,setData]=useState(serviceData)

  return (
    <>

     <div className="service">
     <div className="service-title"> <h6>Our Services</h6>
      <div className="background"></div></div>

  <div className="service-container">
    {
      serviceData.map((value)=>{
return(
  <>
  <div className="image-container">
    <img src={value.img} alt=""  className='service-img'/>
  <div className="bottom-desc">
  <p className='title'>{value.title}</p>
    <p className='desc'>{value.desc}</p>
 
    <Link to={`/service/${value.id}`}><button className='btn'>Check Now</button></Link>
  </div>
  
  </div>
 
  </>
)
      })

    }


  </div>
   </div>
   <Footer/>
  
    </>
  
  
  )
}

export default Service