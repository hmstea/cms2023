import {GoogleAuthProvider} from "firebase/auth";
import {baseLogin} from "api/firebase/firebaseAuth";

export function login(): void {
    console.log('try google login')
    const provider = new GoogleAuthProvider();

    baseLogin(provider);
}


export {GoogleAuthProvider as Provider} from "firebase/auth";