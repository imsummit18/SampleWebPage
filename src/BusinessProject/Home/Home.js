import React, { useEffect } from 'react'
import './Home.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
const Home = () => {
  // useEffect=(()=>{

  // },[])
  return (
    <>
   <div className="home">
<div className="text-home">
  <h1>Grow your Business with <br/> <p className='topic'>SumitTechincal</p></h1>
  <p className='desc'> We are team of talented  developer making websites</p>
<Link to='/service'> <button  className='btn btn-start'>Get Started</button></Link>
</div>
<div className="img-home">
  <img src="https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg" className='person-img' alt="" />
</div>
   </div>
   <Footer/>

    </>
  )
}

export default Home