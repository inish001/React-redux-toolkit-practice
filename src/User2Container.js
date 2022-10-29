import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './features/users/user2Slice'

function User2Container() {
    const user2 = useSelector((state)=>state.user)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>USers</h2>
      <button onClick={()=>dispatch(fetchUsers())}>fetch USers</button>
      {user2.users && user2.users.map((user)=><p key={user.id}>{user.name}</p>)}
    </div>
  )
}

export default User2Container
