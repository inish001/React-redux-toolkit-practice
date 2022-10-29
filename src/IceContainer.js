import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered ,restocked } from './features/icecream/iceSlice'

function IceContainer() {
  const [number,setNumber] = useState(1)
    const ice = useSelector((state)=>state.icecream.numOfIce)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of IceCreams{ice}</h2>
      <button onClick={()=>dispatch(ordered())}>Buy IceCreams</button>
      Number of IceCreams to be restocked <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>dispatch(restocked(parseInt(number)))}>Restock IceCreams</button>
    </div>
  )
}

export default IceContainer
