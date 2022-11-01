import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth';


import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/frebase.utils";
import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    useEffect(() => {
        let response;
        (async () => {
            response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
            <div>
                <h1>Sing in page</h1>

                <SignUpFormComponent></SignUpFormComponent>

                <button onClick={() => logGoogleUser()}>
                    Sign in with google popup
                </button>
                <button onClick={() => signInWithGoogleRedirect()}>
                    Sign in with google redirect
                </button>
            </div>
    )
}

export default SignIn;