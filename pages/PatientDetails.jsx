import React, { useState, useEffect } from 'react'
import Api from '@/Api';


const PatientDetails = () => {

  const [form,setForm]=useState({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",Date:"",Issue:"",DoctorName:"",Block:"",Roomno:"",Did:""});
  const [pddata,setPdData]=useState([]);
  

  const fetchdata = async ()=>{
    try{
      const response = await Api.get(`/pdetails/`);
      setPdData(response.data);
    }
    catch(err){
      console.log(err)
    }
  }

  const submit = async(e)=>{
    e.preventDefault()
    try{
    await Api.post('/pdetails/',form)
    setForm({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",Date:"",Issue:"",DoctorName:"",Block:"",Roomno:"",Did:""})
    fetchdata();
    }
    catch(err){
      console.log(err)
    }
  }

  

  const deleted = async (Pid) => {
    const token = localStorage.getItem('accessToken');
    try {
      await Api.delete(`/pdetails/${Pid}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPdData(pddata.filter(data => data.Pid !== Pid));
    } catch (err) {
      console.log(err);
    }
  }




useEffect(()=>{
  fetchdata()
},[])
 

  return (
    <div className='bg-green-300'>

      <form action="" onSubmit={submit} className=''>
        <div className='flex justify-evenly'>
        <label htmlFor="">Name</label>
        <input type="text" className='border-2 rounded' value={form.Name} onChange={(e)=>setForm({...form,Name:e.target.value})} />

        <label htmlFor="">Age</label>
        <input type="text" className='border-2 rounded' value={form.Age} onChange={(e)=>setForm({...form,Age:e.target.value})} />

        <label htmlFor="">Sex</label>
        <input type="text" className='border-2 rounded' value={form.Sex} onChange={(e)=>setForm({...form,Sex:e.target.value})}/>
        </div>
        <label htmlFor="">Dateorbirth</label>
        <input type="Date" className='border-2 rounded' value={form.Dateorbirth} onChange={(e)=>setForm({...form,Dateorbirth:e.target.value})} />

        <label htmlFor="">Phonenumber</label>
        <input type="text" className="border-2 rounded" value={form.Phonenumber} onChange={(e)=>setForm({...form,Phonenumber:e.target.value})}/>

        <label htmlFor="">Address</label>
        <input type="text" className='border-2 rounded' value={form.Address} onChange={(e)=>setForm({...form,Address:e.target.value})} />

        <label htmlFor="">Date</label>
        <input type="datetime-local" className="border-2 rounded" value={form.Date} onChange={(e)=>setForm({...form,Date:e.target.value})}/>

        <label htmlFor="">Issue</label>
        <input type="text" className='border-2 rounded' value={form.Issue} onChange={(e)=>setForm({...form,Issue:e.target.value})}/>

        <label htmlFor="">DoctorName</label>
        <input type="text" className='border-2 rounded' value={form.DoctorName} onChange={(e)=>setForm({...form,DoctorName:e.target.value})}/>

        <label htmlFor="">Block</label>
        <input type="text" className='border-2 rounded' value={form.Block} onChange={(e)=>setForm({...form,Block:e.target.value})} />

        <label htmlFor="">Roomno</label>
        <input type="text" className='border-2 rounded' value={form.Roomno} onChange={(e)=>setForm({...form,Roomno:e.target.value})}/>

        <label htmlFor="">Did</label>
        <input type="text" className='border-2 rounded' value={form.Did} onChange={(e)=>setForm({...form,Did:e.target.value})}/>

        <div>
          <button type='submit' >Save</button>
        </div>
      </form>



      <table cellSpacing="1" border="1" cellPadding="10" >
  <thead className='bg-red-200'>
    <tr>
   
      <th>Name</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Dateorbirth</th>
      <th>Phonenumber</th>
      <th>Address</th>
      <th>Date</th>
      <th>Issue</th>
      <th>Did</th>
      <th>DoctorName</th>
      <th>Block</th>
      <th>Roomno</th>

    </tr>
  </thead>
  <tbody>
    {pddata.map(data=>(
      <tr key={data.Pid}>
       
        <td>{data.Name}</td>
        <td>{data.Age}</td>
        <td>{data.Sex}</td>
        <td>{data.Dateorbirth}</td>
        <td>{data.Phonenumber}</td>
        <td>{data.Address}</td>
        <td>{data.Date}</td>
        <td>{data.Issue}</td>
        <td>{data.Did}</td>
        <td>{data.DoctorName}</td>
        <td>{data.Block}</td>
        <td>{data.Roomno}</td>
        <td><button onClick={()=>deleted(data.Pid)}>Delete</button></td>
        
      </tr>
    ))}
    
  </tbody>
</table>
</div>
  )
}

export default PatientDetails;

