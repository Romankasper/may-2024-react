import React, {useEffect, useState} from 'react';
import {IUsers} from "../../models/IUsers";
import {getUsers} from "../../servises/api.service";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(()=>{
        getUsers().then(value => setUsers(value))
    },[])
    return (
        <div>
            {
                users.map((user:IUsers)=><User item={user} key={user.id} />)
            }
        </div>
    );
};

export default Users;