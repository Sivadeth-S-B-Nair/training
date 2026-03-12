import React from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Search({setUsers,searchValue,setSearchValue}) {
  const savedUsers=JSON.parse(localStorage.getItem("users"))
  function handleChange(e){
    setSearchValue(e.target.value)
    const filteredUsers=savedUsers.filter((u)=>u.name.toLowerCase().includes(searchValue.toLowerCase()))
    setUsers(filteredUsers)
  }
  function handleClear(){
    setSearchValue("")
    setUsers(savedUsers)
  }
  return (
    <div className='flex gap-1'>
        <div className='border-2 flex w-full border-gray-300 rounded-sm items-center bg-white px-3 py-2'>
            <input type="text" placeholder='Search Users...' onChange={handleChange} value={searchValue} className='w-full border-0 outline-none'/>
            <MagnifyingGlassIcon className='h-6'/>
        </div>
        <button onClick={handleClear}><XMarkIcon className='h-8'/></button>
    </div>
  )
}
