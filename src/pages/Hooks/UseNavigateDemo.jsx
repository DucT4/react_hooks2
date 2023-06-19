import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigateDemo = () => {
    //hook dùng để chuyển hướng trang trong function component
    const navigate = useNavigate();
    const userLogin = useRef({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        let {id,value} = e.target;
        userLogin.current[id] = value;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userLogin.current.email ==='cybersoft' && userLogin.current.password ==='123') {
            //chuyển hướng trang a
            // window.location.href = '/profile';
            navigate('/profile');

        }else {
            //chuyển hướng trang b
            navigate('/forgot-password');
        }


    }
    return (
        <div className='container d-flex justify-content-center align-item-center'>
            <div className='card w-25'>
                <div className='bg-dark text-white text-center'>
                    <h3>Login</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <p>email</p>
                            <input className='form-control' id="email" onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <p>password</p>
                            <input className='form-control' id="password" onChange={handleChange}/>
                        </div>
                        <div className='form-group text-center mt-2'>
                            <button className='btn btn-primary w-100'>Login facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UseNavigateDemo