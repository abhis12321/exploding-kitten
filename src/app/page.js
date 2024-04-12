"use client"
import React , {useEffect, useState} from 'react'
import Card from './Card';
import Image from 'next/image'


export default function Page() {
  const [cards , setCards] = useState(["cat-card" , "defuse-card" , "suffle-card" , "exploding-card"]);

  useEffect(() => {
    suffle(cards);
  } , [])

  function suffle(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = Math.floor(Math.random() * (arr.length));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    setCards([...arr]);
    console.log(arr);
  }

  function handleClick(delcard) {
    let newcards = cards.filter(card => card != delcard);
    setTimeout(() => {      
      suffle(newcards);
    }, 1000);
  }

  return (
    <div className=' bg-slate-800 min-h-[100vh] p-8'>
      <h1 className='mx-auto text-center py-4 px-8 my-2 text-4xl rounded-md border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit'>Home Page</h1>
      <div className='flex flex-wrap items-center justify-center'>
        {
          cards.map((card , index) => {
            return (
              <Card key={index} card={card} handleClick = {e => handleClick(card)} />
            )
          })
        }
      </div>
    </div>
  )
}
