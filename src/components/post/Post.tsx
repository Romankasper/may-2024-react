import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";
type PostProps ={
    item:IPost
}
const Post:FC<PostProps> = ({item}) => {
    return (
        <div>
            {
                <Link state={item} to={item.id.toString()}>{item.title}</Link>

            }
        </div>
    );
};

export default Post;