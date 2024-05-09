
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AdminLayout from "../components/layout/AdminLayout";

export const router =createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"about",
                    element:<About/>
                }
            ]

        },
        {
            path:"admin",
            element:<AdminLayout/>,
            children:[
                {
                    index:true,
                    element:<h1>Admin Dashboard</h1>
                },
                {
                    path:"add-admin",
                    element:<h1>Add Admin in Dashboard</h1>
                }
            ]
            
        }
    ]
)