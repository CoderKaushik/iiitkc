import {React, useState} from 'react'
import { login } from '../api'
import Sup from "../assets/signup.png";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      localStorage.setItem('token', data.token); // Store JWT in localStorage
      // Redirect or handle successful login
      window.location.href = '/';
    } catch (error) {
      setError(error.error || 'Something went wrong');
    }
  };

  return (
    <div className='w-full h-full pt-6 pb-8 px-12 bg-white relative'>
      <div className='w-full h-full bg-black relative'>
  <div className='absolute border-2 border-black bg-white w-full h-full p-8' style={{ right: '12px', bottom: '15px' }}>
    <div className='w-full h-[20%]'>
      <img src={Sup} className='relative w-[20rem]' style={{bottom: '30px'}} alt="" />
    </div>
    <div className='relative border-2 bg-black w-full h-[80%]'>
      <div className='relative w-full h-full bg-[#FF0009] border border-black flex p-6' style={{ right: '6px', bottom: '6px' }}>
        {/* form starts */}
          <form className='w-1/2 h-full border-r-2 p-4 border-black flex flex-col justify-center items-center gap-4' onSubmit={handleSubmit}>
            <h3 className='w-[80%] text-start'>Email</h3>
            <div className='relative w-[80%] h-[2.5rem] bg-black'>
              <input type="email" className='relative w-full h-full p-2' placeholder='abc@gmail.com' value={email}
            onChange={(e) => setEmail(e.target.value)}
            required style={{border: '3px solid black', right: '3px', bottom: '3px'}} />
            </div>

            <h3 className='w-[80%] text-start'>Password</h3>
            <div className='relative w-[80%] h-[2.5rem] bg-black'>
              <input type="password" className='relative w-full h-full p-2' placeholder='********' value={password}
            onChange={(e) => setPassword(e.target.value)}
            required style={{border: '3px solid black', right: '3px', bottom: '3px'}} />
            </div>

            <div className='w-[80%] flex justify-end h-[3rem]'>
              <div className='relative bg-black'><button className='relative bg-[#0019FF] h-full w-[7rem] text-white' type="submit" style={{border: '3px solid black', right: '3px', bottom: '3px'}}>Submit</button></div>
            </div>
          </form>
          {error && <p>{error}</p>}
        <div className='w-1/2 h-full border-l-2 border-black'></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignIn
