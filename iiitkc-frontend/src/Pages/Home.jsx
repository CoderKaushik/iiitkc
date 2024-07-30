import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg"

const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-[10%] border flex border-black py-2 px-6'>
        <div className='w-[20%] h-full flex justify-start items-center'>
          <img src={Logo} alt="" className='w-[4rem]' />
        </div>
        <div className='w-[80%] h-full flex justify-end items-center gap-16'>
          <h2 className='hover:cursor-pointer hover:font-semibold'>About</h2>
          <h2 className='hover:cursor-pointer hover:font-semibold'>Happenings</h2>
          <h2 className='hover:cursor-pointer hover:font-semibold'>Resources</h2>
          <Link className='w-[8rem] h-[3rem]' to="/signup"><div className='relative w-full h-full bg-black rounded-xl'>
            <button className='w-full h-full relative bg-yellow-400 rounded-xl' style={{right: '4px', bottom: '4px'}}>Register</button>
          </div></Link>
        </div>
      </div>
      <div className='w-full h-[60%] border border-black flex'>
        <div className='w-1/2 h-full border-r border-black bg-[#20DA91] p-10'>
          <div className='w-full h-[80%] border border-black'></div>
          <div className='w-full h-[20%] border border-black px-4 py-2'>
            <div className='w-full h-full bg-black rounded-lg relative'>
              <div className='w-full h-full bg-white relative rounded-lg border-2 border-black flex' style={{right:'4px', bottom:'4px'}}>
                <div className='w-[10%] h-full border border-black'></div>
                <div className='w-[60%] h-full border-r border-black'>
                  <input type="text" className='w-full h-full p-2' placeholder='News...' />
                </div>
                <div className='w-[30%] h-full border-l border-black bg-yellow-400 rounded-br-lg rounded-tr-lg hover:cursor-pointer p-2 flex justify-center items-center'>
                  <h2>Search Now</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-full border-l border-black bg-[#C79BFC]'></div>
      </div>
      <div className='w-full h-[30%] border border-black'></div>
    </div>
  )
}

export default Home
