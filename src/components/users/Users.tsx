import React from 'react';
import './Users.css';
import {users} from "../../data";
import {IUserModel} from "../../models/IUsersModel";
import User from "../User/User";

const Users = () => {
    return (
        <ul>
            {
                users.map(({name,age,status}:IUserModel)=><li><User name={name} age={age} status={status}/></li>  )
            }
        </ul>
    );
};

export default Users;