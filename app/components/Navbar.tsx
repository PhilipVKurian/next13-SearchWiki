import React from 'react'
import Link from 'next/link'
//Since search is a client module... it will be treated as such even tho Navbar is a server module
import Search from './Search'

export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between flex-col md:flex-row sticky drop-shadow-lg">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href={"/"}>Tailwind Practice!</Link>
      </h1>
      <Search/>
    </nav>
  )
}
