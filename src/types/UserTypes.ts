export type UserType= {
    email: string;
    password: string;
}

export type AuthType = {
    user: UserType | null;
    login: (user:UserType)=> void;
    logout: () => void;
}
