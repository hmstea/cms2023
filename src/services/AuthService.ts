import {CredentialResult} from "types/AuthTypes";
import {baseRedirectResult, baseSignOut} from "api/firebase/firebaseAuth";


export async function loginService(provider: string){
    const { login } = await import(`api/firebase/provider/${provider}`);
    login();
}

export function loginResult(): Promise<CredentialResult>{
    return baseRedirectResult();
}

export function logoutService(): void{
    return baseSignOut()
}