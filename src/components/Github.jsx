import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tanmayjadav')
    //     .then(response => response.json() )
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='flex p-10 bg-slate-500 text-center text-xl bold'>
      <img src= {data.avatar_url} alt="" width={300}/>
      <span className='flex p-10 justify-center text-center'>Github ID : {data.id}</span>
      <span className='flex p-10 justify-center text-center'>Github followers : {data.followers}</span>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/tanmayjadav')
    return response.json( )
}
