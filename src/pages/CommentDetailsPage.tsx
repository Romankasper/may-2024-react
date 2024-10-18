import React from 'react';

import {useLocation} from "react-router-dom";
import {IComment} from "../models/IComment";

const CommentDetailsPage = () => {

    let {state} = useLocation();
    const comment:IComment = state


    return (
        <div>
            <h3> {comment.user.fullName}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentDetailsPage;