import { useRouter } from 'next/router';
import { useState } from 'react';
import Api from '@/Api';

const LoginPage = () => {

     const [username,setUsername]=useState('');
     const [password,setPassword]=useState('');
     const router = useRouter();
     

     const handleclick = async(e)=>{
      e.preventDefault()
      try{
        const response = await Api.post('/token/',{username,password});
        const { access, refresh}=response.data
        localStorage.setItem('access_token',access)
        localStorage.setItem('refresh_token',refresh)

        axios.defaults.headers.common['Authorization']=`Bearer ${access}`
        router.push('/')
      }
      catch(error){
        console.error('login faild',error)
        alert('Invalid credentials')

      }
     }



   


  return (
    <div>

        <form action="" onSubmit={handleclick}>
          <div>
            <label htmlFor=''>Username</label>
      <input type="username" placeholder='username' value={username.Username}
        onChange={(e) => setUsername({ ...username, Username: e.target.value })} />
        </div>
        <div>
          <label htmlFor=''>Password</label>
      <input type="password" placeholder='password' value={password.Password}
        onChange={(e) => setPassword({ ...password, Password: e.target.value })} />
        </div>
        <div>
      <button type='submit' >Submit</button>
      </div>
      </form>
    </div>
  )
}

export default LoginPage
