import React from 'react';
import {useAuthContext} from "../context/AuthContext";
import {Link, useLocation} from "react-router-dom";
import LogoutButton from "./ui/LogoutButton";
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const auth = useAuthContext();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    if (auth == null || auth?.user === null || pathname === '/login') return (<></>);
    const logout = () => {
        auth.logout();
        navigate('/');
    }
    return (
        <header>
            <div className='flex gap-1 justify-end'>
                <Link to='/'>home</Link>
                <Link to='/event'>event</Link>
                {(auth.user.uid !== undefined && auth.user.uid !== "") && <LogoutButton logout={logout}/>}
                { (auth.user.uid === undefined || auth.user.uid === "") && <Link to='login'>login</Link>}
            </div>
        </header>
    );
}

export default NavBar;