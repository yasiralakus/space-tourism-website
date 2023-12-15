import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Technology from './pages/Technology.jsx'

const router = createBrowserRouter ( [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },

    {
        path: "/destination",
        element: <Destination /> 
    },

    {
        path: "/crew",
        element: <Crew /> 
    },

    {
        path: "/technology",
        element: <Technology /> 
    },


] )

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="container">
        <RouterProvider router={router} />
    </div>
)

