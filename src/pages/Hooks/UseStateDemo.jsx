import React, { useState } from 'react'

const UseStateDemo = (props) => {

    const [number, setNumber] = useState(10);
    const [img, setImg] = useState('https://i.pravatar.cc?u=1');
    const [fontSize,setFontSize] = useState(30);

    const changeFontSize = (size) => {
        let newSize = fontSize + size;
        setFontSize(newSize);
    } 
    return (
        <div className='container'>
            <h3>Ví dụ 1:</h3>
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <hr />
            <div className='mt-2'>
                <h3>Ví dụ 2: </h3>
                <div className='card w-25'>
                    <div className='card'>
                        <img src={img} alt={'...'} />
                        <div className='card-body'>
                            <button className='btn btn-danger' onClick={() => {
                                let newImg = `https://i.pravatar.cc?u=${Math.floor(Math.random() * 100)}`;
                                setImg(newImg);
                            }}>Random</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h3>Ví dụ 3:</h3>
                <p style={{fontSize}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vitae ex dolorem nobis a aut provident laboriosam delectus perferendis vel!</p>
                <button className='btn btn-dark mx-2'onClick={()=>{
                    changeFontSize(5);
                }}>+</button>
                <button className='btn btn-dark mx-2' onClick={()=>{
                    changeFontSize(-5);

                }}>-</button>
            </div>


        </div>
    )
}

export default UseStateDemo


