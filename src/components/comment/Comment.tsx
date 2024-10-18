import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import {Link} from "react-router-dom";
type CommentProps ={
    item:IComment
}
const Comment:FC<CommentProps> = ({item}) => {
    return (
        <div>
            {
               <Link state={item} to={item.id.toString()}>{item.user.username}</Link>
            }

        </div>
    );
};

export default Comment;