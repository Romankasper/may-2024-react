import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
type PostsProps ={
    posts:IPost[]
}
const Posts:FC<PostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => (<div key={post.id}>{post.title}</div>))

            }
        </div>
    );
};

export default Posts;