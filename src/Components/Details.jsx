import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../Store/UserContext'

function Details() {
    const [details, setDetails] = useState(null)
    const [language, setLanguage] = useState('strInstructions')
    const id = useParams().id
    const {  SavedCocktail, setSavedCocktail} = useContext(UserContext)

    async function fetchData(id) {
        try {
            const responce = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await responce.json()
            setDetails(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData(id);
    })

    const saveData = () => {
        const updatedList = [...SavedCocktail, details[0]]
        setSavedCocktail(updatedList)
        localStorage.setItem('SavedCocktail', JSON.stringify(updatedList))
        alert('Saved Successfully')
    }
  return (
    <div className='w-full h-full px-20'>
        {details && details.length > 0 ? (
            <div className='w-full flex flex-col items-center'>
                <div className='w-full flex flex-row justify-between px-32 mb-20 mt-10'>
                    <h1 className='text-5xl font-serif text-black font-medium'>{details[0].strDrink}</h1>
                    <button 
                    onClick={saveData}
                    className='border-2 border-black rounded-lg px-4 py-2 font-medium text-2xl'>Add to Favarate</button>
                </div>
                <img src={details[0].strDrinkThumb} alt="" className='mb-10 w-1/3 h-2/3 object-cover rounded-md'/>
                <div className='w-full h-auto flex flex-row justify-around px-10'>
                    <p className='text-2xl font-serif text-black font-medium'>Category	: <span className='text-red-500 font-semibold'>{details[0].strCategory}</span></p>
                    <p className='text-2xl font-serif text-black font-medium'>strIBA : <span className='text-red-500 font-semibold'>{details[0].strIBA == null ? 'N/A' : details[0].strIBA}</span></p>
                </div>
                <div className='w-full h-auto flex flex-row justify-center items-center gap-10 px-10 mt-14'>
                    <div className='w-auto h-auto flex flex-col'>
                        <p className='text-3xl text-red-500 font-semibold font-serif underline decoration-2'>Ingredients</p>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <p key={index}>{details[0][`strIngredient${index + 1}`]}</p>
                        ))}
                    </div>
                    <div className='w-auto h-auto flex flex-col'>
                        <p className='text-3xl text-red-500 font-semibold font-serif underline decoration-2'>strMeasure1</p>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <p key={index}>{details[0][`strMeasure${index + 1}`]}</p>
                        ))}
                    </div>
                </div>
                <div className='mt-10 flex flex-row justify-between p-5'>
                    <div className='w-2/4 flex flex-col'>
                        <p className='text-3xl text-red-500 font-semibold font-serif underline decoration-2'>Instructions</p>
                        <p className='text-2xl font-mono '>{details[0][language]}</p>
                    </div>
                    <div className='w-1/4'>
                        <select 
                        className='border-2 border-black rounded-lg px-4 py-2 font-medium text-2xl'
                        onChange={(e) => setLanguage(e.target.value)}>
                            <option value="strInstructions">Change Language</option>
                            <option value="strInstructions">English Default</option>
                            <option value="strInstructionsES">Spanish</option>
                            <option value="strInstructionsDE">German</option>
                            <option value="strInstructionsFR">French</option>
                            <option value="strInstructionsIT">Italian</option>
                        </select>
                    </div>
                </div>
            </div>
        ) : (
            <div className='w-full h-screen flex items-center justify-center'>
                <p className='text-3xl font-serif'>Loading...</p>
            </div>
        )}
    </div>
  )
}

export default Details