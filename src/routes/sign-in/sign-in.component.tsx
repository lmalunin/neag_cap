import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/frebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
            <div>
                <h1>Sing in page</h1>
                <button onClick={() => logGoogleUser()}>
                    Sign in with google popup
                </button>
            </div>
    )
}

export default SignIn;