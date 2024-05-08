// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';

//These are the public components
import Footer from './client-component/client_footer';
import Header from './client-component/client_header';
import ErrorPage from './pages/error';

//These are public/landing page view
import LandingAuction from './pages/landingpage/auction';
import LandingCategories from './pages/landingpage/categories';
import LandingContact from './pages/landingpage/contact';
import LandingPastSales from './pages/landingpage/past_sales';

// These are current user view-User Dashboard


//These are current admin user view- Admin Dashboard


//Content for External view/user landing page
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
    },

    {
      path: "/past-sales",
      element: <LandingPastSales />
    },

    {
      path: "/categories",
      element: <LandingCategories />
    },

    {
      path: "/contact",
      element: <LandingContact />
    }

  ]
},

{
  path: "*",
  element: <ErrorPage />
}

//will create path/routing for user Dashboard
//create also children for user dashoard if possible

]);




function App() {
  return (
      <div className="App">   
         <RouterProvider router={router} />
         <h1>HELLO</h1>
      </div>
  )
}

export default App
