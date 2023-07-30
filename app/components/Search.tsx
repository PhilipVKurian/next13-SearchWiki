'use client' //Allows use to use states
import { useState, FormEvent } from 'react'
//Make sure to change from /router to /navigation
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}`)        
    }
  return (
    //To find out what type it is just put onSubmid={e => handleSubmit} and hover over the e to see the type then import the type to use it
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 w-80 text-xl rounded-xl"
            placeholder='Search'
        />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
            🤢💩
        </button>


    </form>
  )
}
