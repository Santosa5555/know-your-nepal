import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'

function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/Activity' element={<><p>Activity</p></>}/>
      <Route path='/BudgetPlanner' element={<><p>Budget Planner</p></>}/>
      <Route path='/PriceGuide' element={<><p>PriceGuide</p></>}/>
    </Route>
  ))
  

  return (
    <>
     <RouterProvider router ={router}/>
    </>
  )
}

export default App
