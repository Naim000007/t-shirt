import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import OrderReivew from './Layout/OrderReivew.jsx';
import Main from './Layout/Main.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path: '/',
        element : <Home></Home>,
        loader: () => fetch('tshitrs.json')
      },
      {
        path: 'review',
        element: <OrderReivew></OrderReivew>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'Contact',
        element: <Contact />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
