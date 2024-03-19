import { Formik,Form, Field,ErrorMessage } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Signup.css"
import * as yup from "yup";

const Signup = () => {
 const defaultValues ={
    name: "",
    email:"",
    password:""
 }

 const validationSchema = yup.object().shape({
    name:yup.string().required("Name is required"),
    email:yup.string().required("Email is required").email("Please Enter Valid Email"),
    password:yup.string().required("Password is required")
 })

 const handleClick = () => {
    alert("Registered")
 }
  return (
    <div>
      <h1 className='h1'>Signup</h1>
      <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={handleClick}>
        <Form className='form'>
          
            <div className='field'>
            <Field type='text' name='name' placeholder='Enter your name' style={{padding:"5px"}}/>
            <p style={{color:"red"}}><ErrorMessage name='name' /></p>
            </div>
            <div className='field'>
            <Field type='text' name='email' placeholder='Enter your email'style={{padding:"5px"}}/>
            <p style={{color:"red"}}><ErrorMessage name='email'/></p>
            </div>
            <div className='field'>
            <Field type='text' name='password' placeholder='Enter your password'style={{padding:"5px"}}/>
            <p style={{color:"red"}}><ErrorMessage name='password' /></p> 
            </div>   
            <button className='btn' type='submit' onClick={handleClick}>Submit</button>
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </Form>
      </Formik>
     
    </div>
  )
}

export default Signup
