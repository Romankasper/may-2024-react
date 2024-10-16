import axios from "axios";
import {IUser} from "../models/IUser";
import {IResponseUsersModel} from "../models/IResponseUsersModel";
import {IPostModel} from "../models/IPosts/IPostModel";
import {IResponcePostModel} from "../models/IPosts/IResponcePostModel";

const axiosInstance =axios.create({
    baseURL:'https://dummyjson.com'
})
export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return (await axiosInstance.get<IResponseUsersModel>('/users')).data.users
    }
}


export const postService = {
    getPostsOfUser: async (id: number): Promise<IPostModel[]> => {
        let axiosResponse = await axiosInstance.get<IResponcePostModel>('/posts/user/' + id);
        return axiosResponse.data.posts


    }
}
