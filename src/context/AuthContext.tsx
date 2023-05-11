import {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {AuthContextType} from "../types/AuthTypes";
import {UserType} from "../types/UserTypes";
import {authStateChanged} from "../api/firebase/firebaseAuth";
import {logoutService, loginService} from "../services/AuthService";


const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    const login = (provider: string) => {
        loginService(provider);
    };


    const logout = () => {
        logoutService();
        setUser({});
    };

    useEffect(() => {
        authStateChanged(setUser);
    }, []);


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
