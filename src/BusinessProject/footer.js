import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
      <div className="footer">
    <p>&copy;2022 SumitTechnical. All Rights Reserved | <Link to='/terms' className='terms'>Terms and Conditions</Link> </p>
   </div>
   </>
  )
}

export default Footer