import React from 'react';
import {useLocation} from "react-router-dom";
import {IPost} from "../models/IPost";

const PostDetailsPage = () => {
    let {state} = useLocation();
    const post:IPost = state

    return (
        <div>
            {
                <p>{post.body}</p>
            }
        </div>
    );
};

export default PostDetailsPage;