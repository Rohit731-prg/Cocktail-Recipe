import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import search from '../assets/search.png'

function Header() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='w-full h-20 flex items-center justify-between px-10 flex-row bg-[#500073]'>
        <img src="https://www.thecocktaildb.com/images/logo.png" className="" />
        <div className='flex flex-row gap-4'>
            <NavLink className='text-white font-medium font-serif' to="/">Home</NavLink>
            <NavLink className='text-white font-medium font-serif' to="/alcoholelist">Alcohole</NavLink>
            <NavLink className='text-white font-medium font-serif' to="/nonAlcohole">Non Alcohole</NavLink>
            <NavLink className='text-white font-medium font-serif' to="/ordinarylist">Ordinary Drink</NavLink>
            <NavLink className='text-white font-medium font-serif' to="/cocktaillist">Cocktail</NavLink>
        </div>
        <div 
        className='bg-slate-200 flex flex-row w-1/3 h-[50%] rounded-md justify-between items-center px-2'>
          <input type="text" 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search your cocktail'
          className='bg-transparent border-none outline-none px-3'/>
          <button
          className='w-6 h-6'
          onClick={() => navigate(`/searchlist/${searchTerm}`)}>
            <img src={search} className="" />
        </button>
        </div>
        <button
        onClick={() => navigate('/favarate')}
        className='px-8 py-2 text-2xl text-white font-medium font-mono border-2 border-white rounded-lg active:bg-gray-800 active:border-gray-800'>
          Favarate
        </button>
    </div>
  )
}

export default Header