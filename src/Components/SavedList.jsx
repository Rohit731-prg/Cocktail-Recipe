import React, { useContext } from 'react';
import { UserContext } from '../Store/UserContext';
import { useNavigate } from 'react-router-dom';

function SavedList() {
    const navigate = useNavigate();
    const { SavedCocktail, setSavedCocktail } = useContext(UserContext);

    const deleteItem = (id) => {
        const updatedList = SavedCocktail.filter((item) => item.idDrink !== id);
        setSavedCocktail(updatedList);
        localStorage.setItem('SavedCocktail', JSON.stringify(updatedList));
    };
    return (
        <div className='w-full flex flex-col px-40'>
            {SavedCocktail.length > 0 ? (
                SavedCocktail.map((item, index) => (
                    <div className='mt-3 flex flex-row justify-start gap-5 border-b-2 border-black pb-2' key={index}>
                        <img src={item.strDrinkThumb} alt="Image is not available"
                        className='w-[300px] h-[350px] object-cover rounded-md'
                        style={{boxShadow: '0 0 8px black'}}                      
                        />
                        <div className='mt-5 w-1/3'>
                          <p className='text-3xl font-serif font-medium'>{item.strDrink}</p>
                          <p className='mt-10 text-xl font-normal'>{item.strInstructions}</p>
                        </div>
                        <div className='h-full mt-10'>
                          <button
                          onClick={() => navigate(`/details/${item.idDrink}`)}
                          className='ml-10 rounded-md border-2 border-black px-5 py-2 hover:bg-black hover:text-white hover:transition-[0.3s] transition-[0.3s]'
                          >Details</button>
                          <button
                          onClick={() => deleteItem(item.idDrink)}
                          className='ml-10 rounded-md border-2 border-black px-5 py-2 hover:bg-black hover:text-white hover:transition-[0.3s] transition-[0.3s]'
                          >Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No saved cocktails!</p>
            )}
        </div>
    );
}

export default SavedList;
