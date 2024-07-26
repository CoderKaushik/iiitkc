import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-5xl text-red-800'>
      <Link to="/signup"><button className='p-8 border border-red-500 rounded-2xl shadow-2xl hover:bg-red-300 hover:cursor-pointer'>SignIn/SignUp</button></Link>
    </div>
  )
}

export default Home
