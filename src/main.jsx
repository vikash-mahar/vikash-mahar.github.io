import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Project3 from './components/Project3/Project3.jsx'
import Project1 from './components/Project1/Project1.jsx'
// import Project2 from './components/Project2/Project2.jsx'
import App from './components/Project2/Project2.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='project1' element={<Project1/>}/>
      <Route path='project2' element={<App/>}/>
      <Route path='project3' element={<Project3/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
