import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='bg-white bg-gradient-to-b from-blue-500 to-violet-800 w-64 min-h-96 m-4 rounded-md flex flex-col items-center justify-center  hover:from-blue-400 hover:to-violet-800'>
        <Image className='rounded-full' src={'https://imgs.search.brave.com/oBwdOilApIhNjTrf1ADJ7epXnuF8iBIC8PgOu--db6M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI0LzVi/LzI0LzI0NWIyNGVi/MzNjYmRhYjk5OGUz/ZDJmMzg1MTNhNDZk/LmpwZw'} alt='card-image' height={200} width={200} />
      <button className=' px-8 py-2 bg-blue-700 rounded hover:bg-blue-600 font-bold tracking-wider active:bg-slate-800 '>choose</button>
    </div>
  )
}
