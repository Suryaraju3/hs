'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/Store/authStore'; 
import Api from '@/Api'; 
import Link from 'next/link';

const LoginPage = () => {
  
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();


  const setUser = useAuthStore((state) => state.setUser); 
  const setAccessToken = useAuthStore((state) => state.setAccessToken);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await Api.post('/token/', formData); 
      const { access, refresh } = res.data;

      setAccessToken(access); 
      setUser(formData.username);

      
      localStorage.setItem('accessToken', access); 
      localStorage.setItem('username', formData.username);

      console.log('Login successful');
      router.push('/');  

    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      const msg = err.response?.data?.detail || err.response?.data?.non_field_errors?.[0] || 'Invalid login';
      setError(msg);
    }
  };

  return (
     

    <div  className=''>


      <h2>Login</h2>

      {error && <p style={{ color: 'red' }} > {error}</p>}

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type="text" placeholder="Username" value={formData.username} onChange={(e)=>setFormData({...formData, username: e.target.value})}required />
          
        <input type="password" placeholder="Password" value={formData.password} onChange={(e)=>setFormData({...formData,password: e.target.value})} required />

        <button type="submit"> Login  </button>
      </form>

      <p className="mt-8 text-blue-600 text-lg">
        Don't have an account? <Link href="/RegisterPage">Register here</Link>
      </p>

      
    </div>
  );
};

export default LoginPage;
