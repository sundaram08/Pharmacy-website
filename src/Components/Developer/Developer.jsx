import React from 'react'
import { useState,useEffect } from 'react'
function Developer() {
    const [data,setData]= React.useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/sundaram08')
        .then((response)=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    })
  return (
    <div>
       <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} 
       <img src={data.avatar_url} width={300} alt="" />
       </div>
    </div>
  )
}

export default Developer
