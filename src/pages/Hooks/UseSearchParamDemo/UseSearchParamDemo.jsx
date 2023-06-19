import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamDemo = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct,setArrProduct] = useState([]);
    const keywordRef = useRef('');
    //Lấy ra keyword từ url
    let keyword = searchParams.get('keyword'); //nếu url không có keyword thì trả null

    const getProductByKeyword = async () => {
        let result = await axios({
            url:`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method:'GET'
        });
        //Lấy dữ liệu từ api setState Array product
        setArrProduct(result.data.content);
    }

    useEffect(() => {
        if (keyword != null) {
            //Gọi api khi word khác null
            getProductByKeyword()

        }
    }, [keyword])

    const handleChange = (e) => {
        let { value } = e.target;
        keywordRef.current = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('keyword', keywordRef.current)
        //Đưa keyword lên thành url
        setSearchParams({
            keyword: keywordRef.current
        })

    }
    return (
        <div className='container'>
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input className='form-control' id="txtTuKhoa" onChange={handleChange} /> <button className='btn btn-success' type='submit'>Search</button>
                </div>
            </form>
            <div className='mt-2'>
                <h3>Search result</h3>
                <div className='row'>
                    {arrProduct.map((item) => {
                        return <div className='col-3 mt-2' key={item.id} >
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <NavLink to={`/detail/${item.id}`} className="btn btn-dark">View detail</NavLink>
                            </div>
                        </div>
                    </div>
                    })}
                    
                </div>
            </div>

        </div>
    )
}

export default UseSearchParamDemo