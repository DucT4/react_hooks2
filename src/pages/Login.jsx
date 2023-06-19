import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginActionApi } from '../redux/reducers/userReducer'

const Login = () => {

  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log('values', values);

      const actionAsync = loginActionApi(values);
      dispatch(actionAsync);

    },
    validationSchema: yup.object().shape({
      email: yup.string().required('email can not be blank').email('email is not valid'),    //.matches(/[0-9]/,'loi')
      password: yup.string().required('password cannot ben blank')
    })
  })

  return (
    <form onSubmit={frm.handleSubmit}>
      <h4>Login</h4>
      <div className='form-group'>
        <p>Email</p>
        <input className='form-control' name='email' id='email' onChange={frm.handleChange} onBlur={frm.handleBlur} />
        {/* <p>{frm.errors.email ? <p className='text-danger'>{frm.errors.email}</p> : ''}</p> */}
        <p>{frm.errors.email && <p className='text-danger'>{frm.errors.email}</p>}</p>

      </div>
      <div className='form-group'>
        <p>password</p>
        <input className='form-control' name='password' id='password' type='password' onChange={frm.handleChange} />
        <p>{frm.errors.password && <p className='text-danger'>{frm.errors.password}</p>}</p>
      </div>
      <div className='form-group'>
        <button className='btn btn-dark' type='submit'> Login</button>
      </div>
    </form>
  )
}

export default Login