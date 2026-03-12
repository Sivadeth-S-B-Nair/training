import { HeartIcon, StarIcon, TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function UserCard({users,setUsers,user}) {
    function toggleFavourite(){
        const updatedUsers=users.map((u)=>{
            if(u.id==user.id){
                return {...u,isFavourite:!u.isFavourite}
            }
            return u
        })
        setUsers(updatedUsers)
        localStorage.setItem("users",JSON.stringify(updatedUsers))
    }
    function handleDelete(){
        const updatedUsers=users.filter((u)=> user.id!=u.id)
        setUsers(updatedUsers)
        localStorage.setItem("users",JSON.stringify(updatedUsers))
    }
    return (
        <div className="mb-3 bg-white px-3 py-2.5 rounded-lg border-2 border-gray-300 flex flex-col gap-2 lg:flex-row lg:justify-between">
            <div>
                <h1 className='font-bold text-lg'>{user.name}</h1>
                <p className='text-blue-500 font-medium'>{user.email}</p>
                <p className='font-medium'>{user.company.name}</p>
            </div>
            <div className='flex justify-between lg:gap-4 lg:items-center'>
                {
                    user.isFavourite?<button className='bg-white border-2 border-gray-400 rounded-sm px-1.5 py-1 flex items-center gap-1 font-medium' onClick={toggleFavourite}><HeartIcon className='h-4 text-red-600'/>Favourite</button>:
                    <button className='bg-amber-200 border-2 text-yellow-700 border-yellow-500 rounded-sm px-1.5 py-1 flex items-center gap-1 font-medium' onClick={toggleFavourite}><StarIcon className='h-4 text-yellow-700'/>Favourite</button>
                }
                <button className='bg-red-500 text-white border-2 border-red-600 rounded-sm px-1.5 py-1 flex items-center gap-1 font-medium' onClick={handleDelete}><TrashIcon className='h-4'/>Delete</button>
            </div>
        </div>
    )
}
