import { Formik,Form, Field,ErrorMessage } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Signup.css"
import * as yup from "yup";

const Login = () => {
    const defaultValues ={
        email:"",
        password:""
     }
    
     const validationSchema = yup.object().shape({
        email:yup.string().required("Email is required").email("Please Enter Valid Email"),
        password:yup.string().required("Password is required")
     })
    
     const handleClick = () => {
        if(!validationSchema){
            alert("Please enter Valid data")
        }
        else{
            alert("LoggedIn Successfully")
        }
       
     }

  return (
    <div>
       <h1>Log-In</h1>
      <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={handleClick}>
        <Form className='form'>
            <div className='field'>
            <Field type='text' name='email' placeholder='Enter your email'style={{padding:"5px"}}/>
            <p style={{color:"red"}}><ErrorMessage name='email'/></p>
            </div>
            <div className='field'>
            <Field type='text' name='password' placeholder='Enter your password'style={{padding:"5px"}}/>
            <p style={{color:"red"}}><ErrorMessage name='password' /></p> 
            </div>   
            <button className='btn' type='submit' onClick={handleClick}>Login</button>
            
        </Form>
      </Formik>
     
    </div>
  )
}

export default Login
