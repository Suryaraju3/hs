'use client';
import React, { useState, useEffect } from 'react'
import Api from '@/Api';


const Doctordetails = () => {

  const [form,setForm]=useState({DoctorName:"", specialist:"",Block:"",Roomno:""});
  const [pdetail,setPDetail]=useState([]);

  const fetchdoctordata = async()=>{
    try{
      const response = await Api.get('/doctors/');
      setPDetail(response.data)
    }catch(err){
      alert("faild")
    }
  };

    const handlesubmit = async(e)=>{
      e.preventDefault();
      try{
        await Api.post('/doctors/',form)
        
        setForm({DoctorName:"", specialist:"",Blcok:"",Roomno:""});
        fetchdoctordata();
      }
      catch(err){
        console.log("post error")
      }
    }

   

  useEffect(()=>{
    fetchdoctordata();
  },[]);


  return (
    <div>
     
     <form action="" onSubmit={handlesubmit} className='flex justify-evenly' >

     
        <h3>Doctorlist</h3>
        
        <label htmlFor="name">DoctorName</label>
        <input type="text" className='border-1 rounded' value={form.DoctorName} onChange={(e)=>setForm({...form,DoctorName:e.target.value})} />
     
     
        <label htmlFor="name">specialist</label>
        <input type="text" className='border-1 rounded' value={form.specialist} onChange={(e)=>setForm({...form,specialist:e.target.value})} />
       
        <label htmlFor="name">Block</label>
        <input type="text" className='border-1 rounded' value={form.Block} onChange={(e)=>setForm({...form,Block:e.target.value})} />
   
        <label htmlFor="name">Roomno</label>
        <input type="text" className='border-1 rounded' value={form.Roomno} onChange={(e)=>setForm({...form,Roomno:e.target.value})} />
     
 
          <button type='submit' className='border-1 rounded bg-green-600 text-white'>Save</button>
     
      

     </form>

    
          <table border="1" cellPadding="10">
        <thead>
          <tr>
            <td>Did</td>
            <th>DoctorName</th>
            <th>specialist</th>
            <th>Block</th>
            <th>Roomno</th>
          </tr>
        </thead>
        <tbody>
          {pdetail.map(datas => (
            <tr key={datas.Did}>
              <td>{datas.Did}</td>
              <td>{datas.DoctorName}</td>
              <td>{datas.specialist}</td>
              <td>{datas.Block}</td>
              <td>{datas.Roomno}</td>
              
            </tr>
))}
        </tbody>
      </table>
          
    </div>
  )
}

export default Doctordetails;
