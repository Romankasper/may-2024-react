import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getUser} from "../servises/api.service";
import {IUsers} from "../models/IUsers";

const UserDetailsPage = () => {
    let {id} = useParams();
    const [user, setUser] = useState<IUsers | null>( null)
   useEffect(()=>{


       if (id){

       getUser(id).then(value => setUser(value))
       }
   },[])


    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserDetailsPage;