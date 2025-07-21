'use client';

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='border-0 bg-amber-400 flex justify-center gap-10 ' >
      <Link href={'/PatientDetails/'}>PatientDetails</Link>
      <Link href={'/Doctordetails/'} >DoctorDetails</Link>
      <Link href={'/Pharmacy/'}>Pharmacy</Link>
      <Link className='flex justify-end' href={'/LoginPage/'}>Login</Link>
    </div>
  )
}

export default Header
