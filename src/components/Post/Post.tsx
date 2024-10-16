import React, {FC} from 'react';
import {IPostModel} from "../../models/IPosts/IPostModel";


type PostProps ={
    post:IPostModel
}
const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default Post;