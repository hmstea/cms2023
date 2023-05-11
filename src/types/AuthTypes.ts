import {UserType} from "./UserTypes";

type ResultType = 'success' | 'fail';
export type ProviderType = '' | 'google' | 'github';

export type CredentialResult = {
    result: ResultType;
    providerId: ProviderType;
} & UserType;

export interface RedirectResult {
    (email?: string, password?: string): Promise<CredentialResult>;
}

export interface Login {
    ():void;
}

export interface Logout{
    ():void;
}


export interface DoLogin {
    (auth: CredentialResult): void;
}
export type AuthContextType = {
    user: UserType |  null;
    login: (provider: string)=> void;
    logout: () => void;
}