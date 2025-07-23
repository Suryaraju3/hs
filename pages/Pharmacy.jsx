import React, { useEffect, useState } from 'react'
import Api from '@/Api';


const Pharmacy = () => {
  
  const [form,setForm]=useState({DoctorName:"",Name:"",Age:"",Sex:"",Description:"",Qty:"",Total:"",Pid:""});
  const [phardata,setPharData]=useState([])

  const fetchdata = async()=>{
    try{
    const response = await Api.get('/pharmacy/');
    setPharData(response.data);
    }catch(err){
      console.log(err)
    }
  }



  const handlesub = async(e)=>{
    e.preventDefault();
    try{
    await Api.post('/pharmacy/',form);
    setForm({DoctorName:"",Name:"",Age:"",Sex:"",Description:"",Qty:"",Total:"",Pid:""})
    fetchdata();
    }catch(err){
      console.log(err)
    }
  }

  const deleted = async (pharmacyid) => {
      const token = localStorage.getItem('accessToken');
      try {
        await Api.delete(`/pharmacy/${pharmacyid}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPharData(phardata.filter(data => data.pharmacyid !== pharmacyid));
      } catch (err) {
        console.log(err);
      }
    }




    useEffect(()=>{
    fetchdata();
  },[]);

  return (
    <div>
      <form action="" onSubmit={handlesub}>

          {/* <label htmlFor="">Pharmcyid</label>
        <input type="text" className='border-2 rounded' value={form.Pharmacyid} onChange={(e)=>setForm({...form,Pharmacyid:e.target.value})}/> */}

        <label htmlFor="">DoctorName</label>
        <input type="text" className='border-2 rounded ' value={form.DoctorName} onChange={(e)=>setForm({...form,DoctorName:e.target.value})} />

        <label htmlFor="">Name</label>
        <input type="text" className='border-2 rounded ' value={form.Name} onChange={(e)=>setForm({...form,Name:e.target.value})} />

        <label htmlFor="">Age</label>
        <input type="text" className='border-2 rounded' value={form.Age} onChange={(e)=>setForm({...form,Age:e.target.value})}/>

        <label htmlFor="">Sex</label>
        <input type="text" className='border-2 rounded' value={form.Sex} onChange={(e)=>setForm({...form,Sex:e.target.value})} />

        <label htmlFor="">Description</label>
        <input type="text" className='border-2 rounded' value={form.Description} onChange={(e)=>setForm({...form,Description:e.target.value})}  />

        <label htmlFor="">Qty</label>
        <input type="text" className='border-2 rounded' value={form.Qty} onChange={(e)=>setForm({...form,Qty:e.target.value})} />

        <label htmlFor="">Total</label>
        <input type="text" className='border-2 rounded' value={form.Total} onChange={(e)=>setForm({...form,Total:e.target.value})} />

         <label htmlFor="">Pid</label>
        <input type="text" className='border-2 rounded' value={form.Pid} onChange={(e)=>setForm({...form,Pid:e.target.value})}/>

      
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>


      <table border="1" cellPadding="10">
  <thead>
    <tr>
   
      <th>DoctorName</th>
      <th>Pid</th>
      <th>Name</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Description</th>
      <th>Qty</th>
      <th>Total</th>
      
    </tr>
  </thead>
  <tbody>
   
     {phardata.map(data=>(
      <tr key={data.pharmacyid}>
         
        <td>{data.DoctorName}</td>
        <td>{data.Pid} </td>
        <td>{data.Name}</td>
        <td>{data.Age}</td>
        <td>{data.Sex}</td>
        <td>{data.Description}</td>
        <td>{data.Qty}</td>
        <td>{data.Total}</td>
        <td><button onClick={()=>deleted(data.pharmacyid)}>Delete</button></td>
       
      </tr>
     ))}
    
  </tbody>
</table>




    </div>
  )
}

export default Pharmacy
