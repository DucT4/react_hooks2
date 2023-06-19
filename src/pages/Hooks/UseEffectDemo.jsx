import React,{useState,useEffect} from 'react'

const UseEffectDemo = () => {

    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);

    console.log('render');
    //Trường hợp 1 : useEffect 1 tham số
    useEffect(()=> {
        //useEffect chạy lần đầu tiên và mỗi khi state thay đổi
        console.log('useEffect run');

        //Không setState tại đây (muốn setState thì phải có if)
        // if(number< 1000) {
        //     setNumber(number + 1);
        // }

        //Giống lifecycle componentDidMount + ComponentDidupdate
    });

    useEffect(()=>{
        //useEffect dùng cho các api dạng getDetail (component didupdate)
        console.log('useEffect dep');
    },[number])

    useEffect(()=> {
        //useEffect tương tự componentdidmount => thường dùng cho api getAll
        console.log('useEffect dep:[]');


        return () => {
            //Kích hoạt khi component mất khỏi giao diện
            //clear các biến chạy ngầm
            console.log('will unmount')
        }
    }, []);


  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number + 1);
        }}>+</button>
        <h3>Like: {like}</h3>
        <button className='btn btn-danger' onClick={()=>{
            setLike(like+ 1);
        }}>
            <i className='fa fa-heart'></i> 
        </button>
    </div>
  )
}

export default UseEffectDemo