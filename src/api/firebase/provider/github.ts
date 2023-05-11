import {GithubAuthProvider} from "firebase/auth";
import {baseLogin} from "api/firebase/firebaseAuth";

export function login(): void {
    console.log('try github login')
    const provider = new GithubAuthProvider();
    baseLogin(provider);
}



export {GithubAuthProvider as Provider} from "firebase/auth";