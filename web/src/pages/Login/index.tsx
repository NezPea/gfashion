import React, { useEffect } from 'react';
import './index.css';
import { useField, FormikProps, Formik  } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';

import { userLogin, selectUser } from '../../app/slices/userSlice';

import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

const MyTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <InputLabel className='input-label'>
        {label}
        <Input {...field} {...props} />
      </InputLabel>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

interface Values {
  username: string;
  password: string;
}

export default () => {

  const user = useSelector(selectUser);
  console.log(user)
  const dispatch = useDispatch();

  console.log(user)
  useEffect(() => {
    console.log(user)
  })


  const handleLoginSubmit = async (values: Values) => {
    console.log('on submit')
    dispatch(userLogin(values))
  }

  return (
    <div className='login-container'>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={handleLoginSubmit}
        validationSchema={yup.object().shape({
          username: yup.string()
            .required("Required"),
          password: yup.string()
            .required("No password provided.")
        })}
      >
        {(props: FormikProps<Values>) => {
          console.log(props)
          const {
              values,
              handleChange,
              handleSubmit,
            } = props;
          return (
            <form onSubmit={handleSubmit}>
              <MyTextField name="username" type="text" label="User Name" onChange={handleChange} value={values.username} />
              <MyTextField name="password" type="password" label="Password" onChange={handleChange} value={values.password} />
              <Button variant="contained" color="primary" type='submit'>Submit</Button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}
