import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {useAuthContext} from "../../context/AuthContext";
import {UserType} from "../../types/UserTypes"

function LoginForm() {
    const auth = useAuthContext();
    console.log(auth)
    const [userForm, setUserForm] = useState<UserType>({email:'', password:''});

    const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.value = e.currentTarget.value.trim();

        const user:UserType = {
            ...userForm,
            [e.currentTarget.id]: e.currentTarget.value,
        };
        setUserForm(user);
    };

    const onSubmit:FormEventHandler = (e) => {
        e.preventDefault();

    };


    return (
        <form onSubmit={onSubmit}>
            <div>name: <input type='text' onChange={handleChange} id='name' required /></div>
            <div>password: <input type='password' onChange={handleChange} id='password' required /></div>
            <button type='submit'>Login</button>
        </form>
    );
}

export default LoginForm;