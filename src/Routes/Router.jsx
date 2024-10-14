import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import Inbox from "../components/Inbox/Inbox";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registration/>
            },
            {
                path:"/inbox",
                element:<Inbox/>
            },
        ]
    }
])