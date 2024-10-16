import {IReactions} from "./IReactions";

export interface IPostModel{
            id: number,
            title: string,
            body: string,
            tags: string[],
            reactions: IReactions,
            views: number,
            userId: number
        }
