import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BlogPosts from "../pages/BlogPosts";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/blogs/:id',
                element: <BlogPosts/>
            }
        ]
    }
])