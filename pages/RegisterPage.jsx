'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const RegisterPage = () => {
  const [formData, setFormData] = useState({username: '',email: '',password: '',});
  const [error, setError] = useState('');
  const router = useRouter(); 

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log("Sending:", formData);

      await Api.post('/register/', formData);
      console.log('Registration successful');

      router.push('/login'); 
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      const msg =
        err.response?.data?.username?.[0] || err.response?.data?.email?.[0] || err.response?.data?.password?.[0] || 'Registration failed';
      setError(msg);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Username" value={formData.username} onChange={(e)=>setFormData({...formData, username: e.target.value})}
          required
        />
        <input
          type="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password" placeholder="Password"  value={formData.password} onChange={(e)=>setFormData({...formData,password: e.target.value})}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
