import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cordered,crestocked } from './features/cake/cakeSlice'

function CakeContainer() {
  const [number, setNumber] = useState(4)
    const cakes = useSelector((state)=>state.cake.numOfCakes)
    // console.log(cakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes {cakes}</h2>
      <button onClick={()=>dispatch(cordered())}>Buy cakes</button>
      Number of Cakes to be restocked <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>dispatch(crestocked(parseInt(number)))}>Restock Cakes</button>
    </div>
  )
}

export default CakeContainer

