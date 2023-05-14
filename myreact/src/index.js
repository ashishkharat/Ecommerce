import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

// import Menu from './components/Menu'
import Home from './components/Home'
import Login from './components/Login'
// import User from './components/User'
// import EditPage from "./components/EditPage";
import Register from "./components/Register";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
// import Parent from "./components/Parent";


const router1=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/ContactUs",
          element:<ContactUs/>
        },
        // {
        //   path:"/edit-page-comp/:userid",
        //   element:<EditPage />
        // },
        {
          path:"/Register",
          element:<Register/>
        }



    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router1} />
  
);