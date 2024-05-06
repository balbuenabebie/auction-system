import React from 'react'
import { Link } from 'react-router-dom';

function sidebar() {
  return (
    <div>
    <nav style={{ backgroundColor: 'white', width: '100%' }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <ul className="text-red-500 flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                <li>
                    <Link to="/admin-home" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </li>
                <li>
                    <Link to="/admin-auctions" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Auctions</Link>
                </li>
                <li>
                    <Link to="/admin-inventory" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inventory</Link>
                </li>
                <li>
                    <Link to="/admin-invoices" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Invoices</Link>
                </li>
                <li>
                    <Link to="/dashboard-users" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
                </li>
            </ul>
        </div>
    </nav>
    <hr />
</div>
  )
}

export default sidebar
