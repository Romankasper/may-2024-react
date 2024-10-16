import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../User/User";
import {userService} from "../../services/api.services";


type UsersProps ={
    lift:(id:number)=>void
}
const Users:FC<UsersProps> = ({lift}) => {

    // https://dummyjson.com/docs/users
    //     отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
    // Структура компонентів : App - Users- User
    // в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        const getUsers = async () => {
            setUsers(await userService.getUsers());
        }

        getUsers();
        return () => {
            console.log('useEffect done');
        }

    },[]);

    return (
        <div>
            {
                users.map((value:IUser) =><User user={value} lift={lift} key={value.id}/> )
            }
        </div>
    );
};

export default Users;