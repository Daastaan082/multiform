import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../Pages/SignUp'

const Navbar = () => {
  return (
    <div className='py-7 px-10 mx-3 d-flex align-items-center justify-content-between'>
    <Link to={'/'}>
      {/* Image */}
    <img src="https://iid.org.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiid-logo.c76f2eba.png&w=1920&q=75" alt="" style={{
        height:"50px",
        width:"150px"
    }}/>
    {/* Image */}
    </Link>
    <div>
        <div  className='d-flex  gap-3 '>
        <Link className='text-decoration-none text-black' to={'/'}>Home</Link>
        <Link className='text-decoration-none text-black' to={'/pricing'}>Create Project Report</Link>
        <Link className='text-decoration-none text-black' to={'/SignUp'}>Sign in</Link>
        <Link className='text-decoration-none text-black' to={'/login'}>Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar