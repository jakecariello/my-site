import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './sidebar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
  },
  {
    path: '/test1',
    element: <Sidebar />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
