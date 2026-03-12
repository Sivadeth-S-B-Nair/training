import React from 'react'
import UserCard from '../components/UserCard'


export default function UserList({users,setUsers}) {
  return (
    <div>
        <h1 className='font-bold divide text-xl ps-2 mb-1.5'>User List</h1>
        {users.map((u)=>
            <UserCard key={u.id} users={users} setUsers={setUsers} user={u} />
        )
        }   
    </div>  
  )
}
