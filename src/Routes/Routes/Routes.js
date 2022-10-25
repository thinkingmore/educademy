import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';


export const routes = createBrowserRouter([

        {
            path:'/',
            element:<Main></Main>,
            children: [
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                },
                {
                    path: '/contact',
                    element:<Contact></Contact>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/register',
                    element:<Register></Register>
                },
                {
                    path: '/faq',
                    element:<FAQ></FAQ>
                }
            ]
        }

    ])
    


