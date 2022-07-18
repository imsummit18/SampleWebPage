import React, { useEffect, useState } from 'react'
import Footer from '../footer'
import './contact.css'

const Contact = () => {
const initialValues={fullname:'',email:'',number:''};
const [formValues,setFormValues]=useState(initialValues)
const[formError,setFormError]=useState({}) 
const[isSubmit,setIsSubmit]=useState(false)
const [message, setMessage] = useState(false)




  const handleChange=(a)=>{
    const{ name,value }=a.target;
    setFormValues({...formValues,[name]:value})

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues)); // forms values are sent to validate function
    setMessage(true)

}

useEffect(() => {
  setTimeout(() => {
    setMessage(false)
  }, 3000)
}, [])
  

const validate=(values)=>{
  let errors={}  
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

if(!values.fullname){
  errors.fullname='**Name is required**'
}else if(values.fullname.length<4){
  errors.fullname='** Fullname must be greater than 4 letters**'
}else if(values.fullname.length>20){
  errors.fullname='**Fullname must be less than 20 letters **'
}
if(!values.email){
  errors.email='**Email is required**'
}else if(!regex.test(values.email))
errors.email='**Invalid email**'
if(!values.number){
  errors.number='**Number is required**'
}
else if(values.number.length<10 || values.number.length>10)
errors.number='**Invalid number**'
return errors; //return error to the setformError
}




  return (
    <>
      <div className="contact">
        <div className="contact-title">Contact Us</div>
        <div className="contact-detail">
          <label htmlFor="FullName">Full Name</label>
          <input type="text"
          name='fullname'
            className='fullname'
            value={formValues.fullname}
            onChange={handleChange}
           />
           <p className='error-message'>{formError.fullname}</p>

          <label htmlFor="Email">Email</label>
          <input type="Email"  
          className='Email' 
          name='email'
          value={formValues.email}
          onChange={handleChange}
        
          />
           <p className='error-message'>{formError.email}</p>
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input type="number" 
          className='phNumber'
          name='number'
          value={formValues.number}
          onChange={handleChange}
      
          />
           <p className='error-message'>{formError.number}</p>
          <label htmlFor="Messagae">Message</label>
          <textarea name="message" id="message" cols="30" rows="7"></textarea>
          <button className='btn btn-submit' onClick={handleSubmit}> Submit Form</button>
        </div>

      {Object.keys(formError).length===0 && message? <p className='message'>"Thank you! You will be reached ASAP"</p>:''}
     </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </>
  )
}

export default Contact