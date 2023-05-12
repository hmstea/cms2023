import {
    getAuth,
    onAuthStateChanged,
    signInWithRedirect,
    AuthProvider,
    getRedirectResult,
    browserSessionPersistence,
    setPersistence,
    signOut,
} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {CredentialResult, ProviderType} from "types/AuthTypes";
import {UserType} from "types/UserTypes";

export const firebaseAuth = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

//const app = initializeApp(firebaseAuth);
initializeApp(firebaseAuth);
const auth = getAuth();


export function baseLogin(provider: AuthProvider) {
    setPersistence(auth, browserSessionPersistence)
        .then(() => {

            signInWithRedirect(auth, provider);
        })
        .catch((error) => {
            console.log(error)
        });


}

export async function baseRedirectResult(): Promise<CredentialResult> {
    return await getRedirectResult(auth)
        .then(async (result) => {
            console.log('getRedirectResult',result)
            if (result !== null && result.providerId !== null) {
                const providerName = result.providerId.split('.')[0];
                const {Provider} = await import(`api/firebase/provider/${providerName}`);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = Provider.credentialFromResult(result);

                if (credential !== null) {
                    //const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;

                    // IdP data available using getAdditionalUserInfo(result)
                    return {
                        result: "success",
                        providerId: providerName,
                        email: user.email,
                        name: user.displayName,
                        uid: user.uid
                    } as CredentialResult;
                }
            }

            return {result: "fail", providerId: ""} as CredentialResult;
        }).catch((error) => {
            // Handle Errors here.
           // const errorCode = error.code;
            //const errorMessage = error.message;
            // The email of the user's account used.
            console.log(error)
            // The AuthCredential type that was used.

            return {result: "fail", providerId: ""} as CredentialResult;
        });
}


export function authStateChanged(callback: React.Dispatch<React.SetStateAction<UserType | null>>) {
    onAuthStateChanged(auth, (user) => {

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            const providerData = user.providerData;
            const providerId = providerData[0].providerId.split('.')[0]
            const authUser: CredentialResult = {
                result: "success",
                providerId: providerId as ProviderType,
                email: user.email ?? undefined,
                name: user.displayName ?? undefined,
                uid: uid
            }
            callback(authUser);
            // ...
        } else {
            callback({});
        }


    });

}

export function baseSignOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
