import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import Plhd from "../assets/placeholder.jpg"

const Blogs = () => {
  // Initialize state for the current page number
  const [page, setPage] = useState(1);

  // Function to handle the backward button click
  const handleBackward = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Function to handle the forward button click
  const handleForward = () => {
    if (page < 50) {
      setPage(page + 1);
    }
  };

  return (
    <div className='w-screen h-screen bg-[#FEFFE6] flex px-12'>
      <div className='w-[35%] h-full flex flex-col pt-8'>
        <div className='w-full h-1/2 p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-[#EE6F36]'></div>
        </div>
        <div className='w-full h-1/2 p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-white'></div>
        </div>
      </div>
      <div className='w-[30%] h-full flex flex-col pt-8'>
        <div className='w-full h-[30%] p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-[#F5F5F5] p-4 flex flex-col justify-center items-center gap-2'>
            <div className='w-full h-1/2 bg-white rounded-xl flex flex-col justify-center p-2'>
              <h6 className='w-full font-thin'>Wish to contribute?</h6>
              {/* <h2 className='w-full font-semibold'>Log in and post your article now!</h2> */}
            </div>
            <button className='w-full h-1/2 bg-transparent border-4 border-black flex justify-center items-center rounded-xl font-semibold text-xl hover:bg-[#a8a8a8]'>Register Now</button>
          </div>
        </div>
        <div className='w-full h-[70%] p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-[#BBFAC1] p-4 flex flex-col justify-center items-center'>
          </div>
        </div>
      </div>
      <div className='w-[35%] h-full flex flex-col pt-8'>
        <div className='h-1/3 w-full p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-[#F8C945] flex justify-center items-center'>
            <div className='w-[80%] h-[3rem] bg-white flex' style={{ borderRadius: '5rem' }}>
              <div className='w-[15%] h-full flex justify-center items-center text-xl'>
                <CiSearch />
              </div>
              <div className='w-[80%] h-full p-2'>
                <input type="text" className='w-full h-full outline-none' placeholder='Search...' />
              </div>
            </div>
          </div>
        </div>
        <div className='h-1/3 w-full p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-white flex flex-col justify-center items-center gap-2'>
            <h1 className='w-full h-[2rem] px-4 font-semibold'>Popular Tags</h1>
            <div className='w-full h-2/3 px-4 flex flex-col'>
              <div className='w-full h-1/2 flex justify-center items-center gap-4 py-2'>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>Technology</button>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>College</button>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>Events</button>
              </div>
              <div className='w-full h-1/2 flex justify-center items-center gap-4 py-2'>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>Project</button>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>Confession</button>
                <button className='w-[30%] h-full bg-[#EE6F36] rounded-xl flex justify-center items-center text-white font-semibold'>Interview Exp</button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-1/3 w-full p-4'>
          <div className='w-full h-full rounded-xl border-4 border-black bg-[#78A6F6] flex flex-col justify-center items-center'>
            <div className='w-full h-2/3 flex'>
              <div className='w-1/2 h-full flex justify-center items-center'>
                <button 
                  className='w-[6rem] h-[6rem] rounded-full bg-blue-800 flex justify-center items-center text-5xl text-white hover:cursor-pointer'
                  onClick={handleBackward}
                >
                  <IoMdArrowRoundBack />
                </button>
              </div>
              <div className='w-1/2 h-full flex justify-center items-center'>
                <button 
                  className='w-[6rem] h-[6rem] rounded-full bg-blue-800 flex justify-center items-center text-5xl text-white hover:cursor-pointer'
                  onClick={handleForward}
                >
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className='w-full h-[1.5rem] flex items-center justify-center px-4 font-semibold'>
              <h1>Page {page} / 50</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
