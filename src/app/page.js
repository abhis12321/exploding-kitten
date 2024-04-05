"use client"

import React , {useState} from 'react'
import Card from './Card';

export default function Page() {
  const [cards , setCards] = useState(["cat-card" , "defuse-card" , "suffle-card" , "exploding-card"]);
  return (
    <div className=' bg-slate-800 p-8'>
      <h1 className='py-4 px-8 my-2 text-4xl rounded-md border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit'>Home Page</h1>
      <div className='flex flex-wrap items-center justify-center'>
        {
          cards.map((card , index) => {
            return (
              // <div key={index}>
              //   {card}
              // </div>

              <Card key={index} card={card} />
            )
          })
        }
      </div>
    </div>
  )
}
