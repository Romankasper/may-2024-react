import React, {FC} from 'react';
import {IUserModel} from "../../models/IUsersModel";

const User:FC<IUserModel> = ({name,age,status}) => {
    return (
        <>
            {name} {age} {status.toString()}
        </>
    );
};

export default User;