import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
type IUserProps ={
    user:IUser
    lift:(id:number)=>void
}
const User:FC<IUserProps> = ({user,lift}) => {
    return (

                <div key={user.id}>{user.firstName  } {user.maidenName} {user.lastName}
                    <button onClick={()=>{lift(user.id)}}>
                        fetch post
                    </button>
                </div>

    );
};

export default User;