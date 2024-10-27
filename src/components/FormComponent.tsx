import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";
type FormProps={
    username:string,
    password:string,
    age:number
}

const FormComponent = () => {
const {
    handleSubmit,
    register,
    formState:{
        errors,
        isValid
    }
} = useForm<FormProps>({mode:'all',resolver:joiResolver(userValidator)});
    const customHandler =(  dataFromForm:FormProps)=>{
       console.log(dataFromForm)

    }



    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
            <input type="text"  placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
            </label>
            </div>
           <div>
            <label>
                <input type="text"  placeholder={'password'} {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
            </label>
           </div>
            <div>
            <label>
                <input type="number" placeholder={'age'} {...register('age')}/>
                {errors.age && <span>{errors.age.message}</span>}
            </label>
            </div>
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default FormComponent;