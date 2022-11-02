import './authentication.styles.scss';

import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth';
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/frebase.utils";
import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SignInFormComponent from "../../components/sign-in-form/sign-in-form.component";

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

    return (
            <div className='authentication-container'>
                <SignInFormComponent></SignInFormComponent>
                <SignUpFormComponent></SignUpFormComponent>

                {/*<button onClick={() => signInWithGoogleRedirect()}>*/}
                {/*    Sign in with google redirect*/}
                {/*</button>*/}
            </div>
    )
}

export default SignIn;