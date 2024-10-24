import axios from "axios";
import {BaseResponseType} from "../models/BaseResponce";
import {IPost} from "../models/IPost";

 const axiosInctense =axios.create({
    baseURL:"https://dummyjson.com"
})


export const apiServise ={
     posts:{
         getAll: async (page:number):Promise<BaseResponseType &{posts:IPost[]}> =>{
             const skip:number =(page-1)*30
             const axiosResponse = await axiosInctense.get<BaseResponseType &{posts:IPost[]}>('/posts',{
                 params:{
                     skip:skip
                 }
             });
             return axiosResponse.data
         }
     }
}
