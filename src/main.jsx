import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import User from './Components/User/User.jsx'
import Developer from './Components/Developer/Developer.jsx'
import Cart from './Components/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[
    { path: "",
      element: <Home/>
    },
    {
      path:"about",
      element: <About/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
    {path: "user",
    element: <User/>,
    children:[{
      path:":userid",
      element:<User/>
    } 
    ]
    },
    {
      path: "*",
      element: "Not Found"
    },
    {
      path: "developer",
      element: <Developer/>
    },
    {
      path: '/cart',
      element: <Cart/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router = {router}/>
   </Provider>
    </React.StrictMode>
)
