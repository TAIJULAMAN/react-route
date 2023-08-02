import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/about",
//     element: <div>this is about section</div>,
//   },
//   {
//     path: "/contact",
//     element: <div>this is contact section</div>,
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "user/:userName",
        element: <UserDetails></UserDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userName}`)
      },
      {
        path: "Posts",
        element: <Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "Users",
        element:<Users></Users>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
