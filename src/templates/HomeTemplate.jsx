import React from 'react'
import Header from '../components/Header'

import {Outlet} from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <div>
        <Header />
        <div className='content' style={{minHeight:650}}>
            <Outlet />
        </div>

        <footer className='fs-3 text-center text-white p-3 bg-dark'>
            Footer
        </footer>

    </div>
  )
}

export default HomeTemplate