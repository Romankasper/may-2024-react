import React, {FC} from 'react';
import './Character.css'
type IpropType ={
    name:string;
    status:string;
    type:string;
    gender:string;
    img:string;
    children?:React.ReactNode;
}
const Character:FC<IpropType>= ({children,type,name,gender,img,status}) => {
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status:{status}</li>
                <li>type:{type}</li>
                <li>gender:{gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {
                children
            }
        </div>
    );
};

export default Character;