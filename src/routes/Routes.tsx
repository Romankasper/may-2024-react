import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";

export const routes =createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
        {index:true,element:<HomePage/>},
        {path:'posts',element:<PostsPage/>}
    ]
}])