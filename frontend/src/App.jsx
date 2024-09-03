import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'

function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/activity' element={<><p>Activity</p></>}/>
      <Route path='/budgetplanner' element={<><p>Budget Planner</p></>}/>
      <Route path='/priceguide' element={<><p>Price Guide</p></>}/>
      <Route path='/help' element={<><p>help</p></>}/>
    </Route>
  ))
  

  return (
    <>
     <RouterProvider router ={router}/>
    </>
  )
}

export default App
