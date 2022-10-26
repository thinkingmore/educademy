import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Checkout from '../../Pages/Checkout/Checkout';
import Contact from '../../Pages/Contact/Contact';
import Course from '../../Pages/Courses/Course';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


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
                    path:'/courses/:id',
                    element:<Courses></Courses>,
                    loader: ({params}) => fetch(`https://educademy-server.vercel.app/categories/${params.id}`)
                    
                },
                {
                    path:'/courses/:id/:id',
                    element:<Course></Course>,
                    loader: ({params}) => fetch(`https://educademy-server.vercel.app/courses/${params.id}`)
                    
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
                },
                {
                    path: '/courses/:id/:id/checkout/:id',
                    element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                    loader: ({params}) => fetch(`https://educademy-server.vercel.app/courses/${params.id}`)
                },
                {
                    path: '*',
                    element:<PageNotFound></PageNotFound>
                }
            ]
        }

    ])
    


