import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Header from './client-component/client_header'
import Footer from './client-component/client_footer'
import LandingAuction from './pages/landingpage/auction'
import ErrorPage from './pages/error'

const DashboardLanding = () =>{
  return<div>
    <Header />
    <Outlet />
    <Footer />
  </div>
}

const router =createBrowserRouter ([

  // Landing Page
{
  path: "/",
  element: <DashboardLanding />,
  children: [
    {
      path: "/",
      element: <LandingAuction />
    }

  ]
},

{
  path: "*",
  element: <ErrorPage />
}


]);




function App() {
  return (
      <div className="App">   
         <RouterProvider router={router} />
      </div>
  )
}

export default App
