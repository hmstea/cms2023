import React, {createContext, useContext, useState} from 'react';
import {UserType, AuthType} from "../types/UserTypes";
import {login, logout} from "../services/UserService";


const AuthContext = createContext<AuthType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext(){
    return useContext(AuthContext);
}
