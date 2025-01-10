import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SearchList() {
  const navigate = useNavigate()
  const { searchTerm } = useParams()
  const [details, setDetails] = useState([])

  async function fetchData() {
    try {
      console.log(searchTerm)
      const responce = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const data = await responce.json()
      setDetails(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className='w-full h-full pt-10 px-10 bg-[#F5EFFF]'>
        <p className='text-3xl font-Outfit w-full my-10'>All Search Result with "{searchTerm}"</p>
        {details && details.length > 0 ? (
          <div className='w-full flex flex-row justify-center items-center gap-5 px-40 flex-wrap'>
          {details.map((item, index) => (
            <div 
            style={{boxShadow: '0 0 8px black'}}
            className='w-[300px] h-[432px] flex flex-col gap-2 rounded-md bg-[#CDC1FF] m-5 pb-2' key={index}>
              <img 
              className='w-[300px] h-[350px] object-cover rounded-md'
              src={item.strDrinkThumb} alt={item.strDrink} style={{boxShadow: '0 0 8px black'}}  />
              <div className='mt-5 w-full flex flex-col justify-center items-center'>
                <p 
                className='text-xl font-serif font-medium '>
                  {item.strDrink}
                </p>
                <button 
                className='border-2 transition-[0.3s] hover:transition-[0.3s] border-black py-2 px-5 text-xl font-medium hover:bg-black hover:text-white hover:border-white rounded-md'
                onClick={() => navigate(`/details/${item.idDrink}`)}>Details</button>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div className='w-full h-screen flex items-center justify-center'>
            <p className='text-3xl font-serif'>Loading...</p>
          </div>
        )}
    </div>
  )
}

export default SearchList