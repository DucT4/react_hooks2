import React, { useReducer, useRef, useState } from 'react'
import Card from './Card';

/*
    +useRef: 
        Tương tự useState dùng để lưu lại giá trị sau mỗi lần component render, tuy nhiên khi ref thay đổi thì giao diện không phải render lại.
        Ngoài ra useRef còn dùng để truy xuất đến thẻ khi gắn vào thuộc ref của thẻ (JSX Element)
    + useRef vs useState
        useRef dùng để lưu giá trị sau mỗi lần component render tuy nhiên không làm cho component khi thay đổi giá trị
        useState dùng để lưu lại giá trị sau mỗi lần component render tuy nhiên sau khi setState thì component sẽ render lại 

*/
const UseRefDemo = () => {
    // const [userLogin,setUserLogin] = useState({
    //     username:'',
    //     password:''
    // });
    const elementRef = useRef();
    const [number,setNumber] = useState(1);
    console.log('render');
    const userLoginRef = useRef({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        const { id, value } = e.target;

        userLoginRef.current[id] = value;
        // userLogin[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userLoginRef', userLoginRef.current);
        // console.log(userLogin)
        elementRef.current.style.color = 'red'; 
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <p>{number}</p> <button onClick={()=>{ setNumber(number+1)}} className='btn btn-success'>+</button>
            <h3>Login</h3>
            <div className='form-group'>
                <p>Username</p>
                <input className='form-control' id="username" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input className='form-control' id="password" type="password" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button ref={elementRef} className='btn btn-dark my-2'>Login</button>
            </div>
            <hr />
            {/* <div className='w-25'>
                <Card ref={elementRef} />

            </div> */}
        </form>
    )
}

export default UseRefDemo