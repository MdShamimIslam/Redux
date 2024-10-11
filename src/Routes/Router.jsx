import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import AddVideo from "../components/AddVideo/AddVideo";
import VideoDetails from "../components/VideoDetails/VideoDetails";
import UpdateVideo from "../components/UpdateVideo/UpdateVideo";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<VideoGrid/>
            },
            {
                path:"/add-video",
                element:<AddVideo/>
            },
            {
                path:"/videoDetails/:id",
                element:<VideoDetails/>
            },
            {
                path:"/edit-video/:id",
                element:<UpdateVideo/>
            }
        ]
    }
])