import {IPostModel} from "./IPostModel";

export interface IResponcePostModel{
    total:number,
    skip:number,
    limit:number,
    posts:IPostModel[]
}