import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import InputUser from '../components/InputUser'
import UserList from '../components/UserList'
import axios from 'axios'

export default function DashBoard() {
    const [users,setUsers]=useState(JSON.parse(localStorage.getItem("users"))||[])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    const [searchValue,setSearchValue]=useState("")
    useEffect(()=>{ 
        setIsLoading(true)
        setError(null)
        if(users.length>0){
            setIsLoading(false)
            return
        }
        async function fetchUsers() {
            try{
                const response=await axios.get("https://jsonplaceholder.typicode.com/users")
                const updatedUsers=response.data.map((u)=>{
                    return {...u,isFavourite:false}
                })
                setUsers(updatedUsers)
                localStorage.setItem("users",JSON.stringify([...updatedUsers]))
            }
            catch(err){
                console.log(err);
                setError("Failed to fetch users")
            }
            finally{
                setIsLoading(false)
            }
        }
        
        fetchUsers()
    },[ ])
    return (
        <section className='flex flex-col px-4 py-6 gap-4 text-blue-950 lg:px-40'> 
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-2xl lg:text-3xl'>User Management Dashboard</h1>
                <p className='font-medium'>React & Tailwind CSS</p>
            </div>
            <Search setUsers={setUsers} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <InputUser users={users} setUsers={setUsers}/>
            {isLoading && <p>Loading users...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && 
            <UserList users={users} setUsers={setUsers}/>
            }
        </section>
    )
}
