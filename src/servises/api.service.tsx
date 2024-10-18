import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";
import {IUsers} from "../models/IUsers";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {IProduct} from "../models/IProduct";

const axiosInstance = axios.create({
    baseURL:'http://dummyjson.com'
})


export const getUsers = async ():Promise<IUsers[]>=>{
let {data:{users}} = await axiosInstance.get<BaseResponseType & {users:IUsers[]}>('/users');
return users
}


export const getUser = async (id:string):Promise<IUsers>=>{
    let {data} = await axiosInstance.get<IUsers>('/user/' +id);
    return  data
}


export const  getPosts = async ():Promise<IPost[]>=>{
    let {data:{posts}} = await axiosInstance.get<BaseResponseType & {posts:IPost[]}>('/posts');
    return posts
}



export const getComments =  async ():Promise<IComment[]> =>{
    let axiosResponse3 = await axiosInstance.get<BaseResponseType & {comments:IComment[]}>('/comments');
  return axiosResponse3.data.comments
}

export const getProducts = async ():Promise<IProduct[]>=>{
   let axiosResponse4 = await axiosInstance.get<BaseResponseType & {products:IProduct[]}>('/products');
  return  axiosResponse4.data.products
}



















