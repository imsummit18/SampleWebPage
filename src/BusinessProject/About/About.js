import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer'
const About = () => {
  return (
 <>
    <div className="about home">
<div className="text-home text-about">
  <h1>Welcome to About Page <br/> <p className='topic'>SumitTechincal</p></h1>
  <p className='desc'> We are team of talented  developer making websites</p>
<Link to='/contact'> <button  className='btn btn-start'>Contact Here</button></Link>
</div>
<div className="img-home">
  <img src="https://thumbs.dreamstime.com/b/conceptual-internet-information-technology-graphic-interface-screen-display-internet-information-technology-display-122399117.jpg" className='person-img' alt="" />
</div>
   </div>
   <Footer/>
 </>
  )
}

export default About