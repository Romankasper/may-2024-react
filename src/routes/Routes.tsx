import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import CustomErrorLoyaut from "../layout/CustomErrorLoyaut";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import CommentDetailsPage from "../pages/CommentDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id', element: <UserDetailsPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'posts/:id', element: <PostDetailsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'comments/:id', element: <CommentDetailsPage/>},
        {path:'products' , element:<ProductsPage/>},
        {path:'products/:id' , element:<ProductDetailsPage/>}

    ],

    errorElement: <CustomErrorLoyaut/>

}])