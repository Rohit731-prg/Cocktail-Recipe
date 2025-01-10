import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import AlcoholeList from './Components/AlcoholeList'
import NonAlcohole from './Components/NonAlcohole'
import SearchList from './Components/SearchList'
import Details from './Components/Details'
import OrdinaryList from './Components/OrdinaryList'
import CocktailList from './Components/CocktailList'
import SavedList from './Components/SavedList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Header />
      <Home />
    </div>
  },
  {
    path: '/alcoholelist',
    element: <div>
      <Header />
      <AlcoholeList />
    </div>
  },
  {
    path: '/nonAlcohole',
    element: <div>
      <Header />
      <NonAlcohole />
    </div>
  },
  {
    path: '/ordinarylist',
    element: <div>
      <Header />
      <OrdinaryList />
    </div>
  },
  {
    path: '/cocktaillist',
    element: <div>
      <Header />
      <CocktailList />
    </div>
  },
  {
    path: '/searchlist/:searchTerm',
    element: <div>
      <Header />
      <SearchList />
    </div>
  },
  {
    path: '/details/:id',
    element: <div>
      <Header />
      <Details />
    </div>
  },
  {
    path: '/favarate',
    element: <div>
      <Header />
      <SavedList />
    </div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App