import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import style from './SignupForm.module.scss'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username:'',
    },
    onSubmit: values => {
      axios.post('https://northwind.vercel.app/api/categories', values)

      formik.resetForm()
    },
  });
  return (
    <div className={style.Div1}>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
     
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
            <label htmlFor="email">Username</label>
     <div className={style.Div2}>
      <input
        id="username"
        name="username"
        type="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  
  );
};

export default SignupForm