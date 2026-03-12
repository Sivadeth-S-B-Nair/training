import React, { useState } from 'react'

export default function InputUser({users,setUsers}) {
  const [user,setUser]=useState({
    name:"",
    email:"",
    companyName:"",
  })
  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    if(user.name==""||user.email==""||user.companyName==""){
      return
    }
    const ids=users.map((u)=>u.id)
    const maxId=users.length>0?Math.max(...ids)+1:0
    const newUser={id:maxId,name:user.name,email:user.email,company:{name:user.companyName},isFavourite:false}
    setUsers([...users,newUser])
    localStorage.setItem("users",JSON.stringify([...users,newUser]))
    setUser({name:"",email:"",companyName:""})
  }
  
  

  return (
    <div className='bg-white px-2 py-2.5 rounded-lg border-2 border-gray-300'>
        <h1 className='font-bold mb-2 text-xl'>Add New User</h1>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <input type="text" name="name" id="name" placeholder='Name' onChange={handleChange} value={user.name} className='border-2 w-full border-gray-300 p-1 rounded-sm outline-none'/>
                    <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange} value={user.email} className='border-2 w-full border-gray-300 p-1 rounded-sm outline-none'/>
                    <input type="text" name="companyName" placeholder='Company Name' id="companyName" onChange={handleChange} value={user.companyName} className='border-2 w-full border-gray-300 p-1 rounded-sm outline-none'/>
                </div>
                <button type="submit" className='bg-blue-500 w-full text-white p-2 rounded-lg font-medium'>Add User</button>
            </form>
    </div>
  )
}
