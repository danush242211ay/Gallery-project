import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Card from './components/Card';
const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1)
  const getData = async () =>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

      setUserdata(response.data)
    }
    useEffect(function(){
      getData()
    },[index])
    let printuserdata= <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
    if(userdata.length>0){
      printuserdata=userdata.map(function(elem,idx){
        return <div key={idx}>
          <Card elem={elem}/>
        </div>
      })
    }
  return (
    <div className='bg-black h-screen  p-4 text-white'>
      <div className='flex flex-wrap gap-5 h-[90%] overflow-auto'>
        {printuserdata}
      </div>
      <h2 className='flex justify-center items-center p-2'>{index}</h2>
      <div className='flex justify-center gap-6 items-center p-2'>
        <button 
        className='bg-amber-400 py-2 px-4 text-sm text-black font-semibold cursor-pointer active:scale-105'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserdata([])
          }
        }}
        >Prev</button>
        <button 
        className='bg-amber-400 py-2 px-4 text-sm text-black font-semibold cursor-pointer active:scale-105'
        onClick={()=>{
          setIndex(index+1)
          setUserdata([])
        }}
        >Next</button> 
      </div>
    </div>
  )
}

export default App