import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2'>
        <Link to="/" className='text-blue-600'>Home</Link>
        <Link to="/projects" className='text-blue-600'>Projects</Link>
        <Link to="/blogs" className='text-blue-600'>Blogs</Link>
    </div>
  )
}

export default Navbar