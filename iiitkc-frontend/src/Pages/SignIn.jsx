import {React, useState} from 'react'
import { login } from '../api'

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
    <div className='w-full h-full flex justify-center items-center p-16 bg-blue-300'>
      <div>
        <form className='w-full h-full flex flex-col justify-center items-center gap-12' onSubmit={handleSubmit}>
            <input className='border border-black rounded-xl p-6' type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            <input className='border border-black rounded-xl p-6' type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
            <button className='border border-black rounded-xl p-6 hover:bg-gray-400' type='submit'>Submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default SignIn
