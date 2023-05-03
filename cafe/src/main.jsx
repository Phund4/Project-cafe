import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import MainPage from './MainPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu/>,
    },
    {
      path: "mainpage/",
      element: <MainPage />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
