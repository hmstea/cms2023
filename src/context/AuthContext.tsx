import React, {createContext, useContext, useState} from 'react';

type AuthType = {
    email: string;
}

const AuthContext = createContext<AuthType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [auth, setAuts] = useState<AuthType | null>(null);
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext(){
    return useContext(AuthContext);
}
