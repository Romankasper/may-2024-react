import React, {FC} from 'react';
import {IPostModel} from "../../models/IPosts/IPostModel";
import Post from "../Post/Post";



type PostsProps ={
    posts:IPostModel[]
}
const Posts:FC<PostsProps> = ({posts}) => {
    return (
        <div>
            {posts.map(value =><Post key={value.id} post={value}/> )}
        </div>
    );
};

export default Posts;