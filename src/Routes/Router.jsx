import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import Conversation from "../components/pages/Conversation/Conversation";
import Inbox from "../components/Inbox/Inbox";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


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
                element:<PrivateRoute><Conversation/></PrivateRoute>
            },
            {
                path:"/inbox/:id",
                element:<PrivateRoute><Inbox/></PrivateRoute>
            },
        ]
    }
])