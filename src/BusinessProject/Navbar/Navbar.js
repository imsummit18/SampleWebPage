import React from 'react'
import'./navbar.css'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className="navbar">

<div className="left-heading">
    <h1><Link to='/' className='heading'>SumitTechnical</Link></h1>
</div>

   <div className="nav-list">
    <ul className="list">
        <li><NavLink to='/' className='List2'  style={({isActive})=>{
          return{
        color: isActive?'#2193b0':'',
        borderBottom:isActive?' 1px solid #2193b0':''
          }
        }}>Home</NavLink></li>
        <li><NavLink to='/service'className='List2'  style={({isActive})=>{
          return{
        color: isActive?'#2193b0':'',
        borderBottom:isActive?' 1px solid #2193b0':''
          }
        }}>Services</NavLink></li>
        <li><NavLink to='/about' className='List2'  style={({isActive})=>{
          return{
        color: isActive?'#2193b0':'',
        borderBottom:isActive?' 1px solid #2193b0':''
          }
        }}>About</NavLink></li>
        <li><NavLink to='/contact' className='List2'  style={({isActive})=>{
          return{
        color: isActive?'#2193b0':'',
        borderBottom:isActive?' 1px solid #2193b0':''
          }
        }}>Contact</NavLink></li>
       
    </ul>
   </div>
   
   </div>
   {/* <div className="footer">
    <p>&copy;2022 SumitTechnical. All Rights Reserved | <a href="">Terms and Conditions</a> </p>
   </div> */}


   </>
  )
}

export default Navbar