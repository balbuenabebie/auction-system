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

import DashboardTop from './client-component/dashboard_top';
import DashboardMenu from './client-component/customer_dashboard_menu';

import UserDashboardAuction from './pages/client/auctions';
import BidderRegister from './pages/client/bidder_register';
import ChatSupportCustomer from './pages/client/chat_support';
import MyItems from './pages/client/my_items';
import UserRegister from './pages/client/register';
import UserLogin from './pages/client/login';
import Settings from './pages/client/settings';
import Shipment from './pages/client/shipment';
import UserBiddingHistory from './pages/client/user_bidding_history';


//These are current admin user view- Admin Dashboard
import AdminSidebar from './admin-component/sidebar'

import AdminAuctions from './pages/admin/auctions';
import AdminHome from './pages/admin/Dashboard_home';
import AdminChats from './pages/admin/chats';
import AdminInventory from './pages/admin/inventory';
import Invoice from './pages/admin/invoices';
import Login from './pages/admin/login';
import Users from './pages/admin/users';




//Content for External view/user landing page
const DashboardLanding = () =>{
  return<div>
    <Header />
    <Outlet />
    <Footer />
  </div>
}

//Content for External view/user landing page
const DashboardCustomer = () =>{
  return<div>
    <DashboardTop />
    <DashboardMenu />
    <Outlet />
   
  </div>
}

//Content for Admin Dashboard
const DashboardAdmin= () =>{
  return<div>
    <AdminSidebar />
    <Outlet />
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

//Error Prompt

{
  path: "*",
  element: <ErrorPage />
},


//user Dashboard

{
  path: "/",
  element: <DashboardCustomer />,
  children: [

    {
      path: "/user_dashboard_auctions",
      element:<UserDashboardAuction />,
    },

    {
      path: "/chat_support",
      element:<ChatSupportCustomer />,
    },
    {
      path: "/settings",
      element:<Settings />,
    },

    {
      path: "/shipment",
      element:<Shipment />,
    },
     
    {
      path: "/user-bidding-history",
      element:<UserBiddingHistory />,
    },

    {
      path: "/my-items",
      element:<MyItems />,
    },
    {
      path: "/my-items",
      element:<MyItems />,
    },
    {
      path: "/bidder-register",
      element:<BidderRegister />,
    },

    {
      path: "/customer-register",
      element:<UserRegister />,
    },

    {
      path: "/customer-login",
      element:<UserLogin />,
    },
  ]
},

//ADMIN DASHBOARD

{
  path: "/",
  element: <DashboardAdmin />,
  children: [
    {
      path: "/admin-home",
      element: <AdminHome />,
    },

    {
      path: "/admin-auctions",
      element: <AdminAuctions />,
    },

    {
      path: "/admin-chats",
      element: <AdminChats />,
    },
    {
      path: "/admin-inventory",
      element: <AdminInventory />,
    },
    {
      path: "/admin-invoices",
      element: <Invoice />,
    },
    {
      path: "/dashboard-users",
      element: <Users />,
    },
    
    {
      path: "/admin-login",
      element: <Login />,
    },


  ]
},

]);




function App() {
  return (
      <div className="App">   
         <RouterProvider router={router} />
      </div>
  )
}

export default App
