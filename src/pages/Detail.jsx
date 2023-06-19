import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { http } from './util/config';
const Detail = () => {
    const [productDetail, setProductDetail] = useState({
    })
    const params = useParams();

    const getProductDetail = async () => {
        const res = await http.get(`/api/Product/getbyid?id=${params.id}`,
        );
        if (res) {
            setProductDetail(res.data.content);
        }

    }

    console.log(params.id);
    useEffect(() => {
        //Call api
        getProductDetail();
    }, [params.id])


    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-4'>
                    <div className='card'>
                        <img src={productDetail.image} alt="..." />
                    </div>
                </div>
                <div className='col-8'>
                    <h3>{productDetail.name}</h3>
                    <p>{productDetail.description}</p>
                    <h3>{productDetail.price} $</h3>

                    <button className='btn btn-dark mt-2' >Add to carts <i className='fa fa-cart-plus'></i> </button>
                </div>
            </div>
            <div className='mt-2'>
                <h3>Related products</h3>
                <div className='row'>
                    {productDetail.relatedProducts?.map((item) => {
                        return <div className='col-4' key={item.id}>
                            <div className='card'>
                                <img src={item.image} alt='...' />
                                <div className='card-body'>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                    <NavLink className='btn btn-dark' to={`/detail/${item.id}`}>View detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}


                </div>
            </div>

        </div>
    )
}

export default Detail