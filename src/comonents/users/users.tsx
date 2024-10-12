import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../usrer/user";
import {getUsers} from "../../services/api.service";
type IUsersProps ={
    lift:(user:IUser)=>void
}
const Users:FC<IUsersProps> = ({lift}) => {
    let [users,setUser] =useState<IUser[]>([])


    useEffect(()=>{

            getUsers().then((response:IUser[]) => {
                setUser(response)
            })
    },[])
    return (
        <div>
            {
                users.map((value:IUser) => <User lift={lift} user={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;