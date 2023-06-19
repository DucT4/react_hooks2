import React, {memo} from 'react'

const Child = (props) => {

    console.log('child render')
  return (
    <div className='bg-dark text-white text-center p-3 fs-3 mt-2'>
        Child
        <p>number props: {props.renderNumber()}</p>
    </div>
  )
}

export default memo(Child)