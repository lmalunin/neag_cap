import './sign-in-form.styles.scss';

import {useContext, useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/frebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import {UserContext} from "../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(response?.user);
            resetFormFields();
        } catch (error: any) {
            switch (error.state) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user exist');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
            <div className='sign-up-container'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={(event) => submitHandler(event)}>

                    <FormInputComponent
                            label='Email'
                            inputOptions={{
                                type: "text",
                                required: true,
                                onChange: (event) => changeHandler(event),
                                name: "email",
                            }}/>

                    <FormInputComponent
                            label='Password'
                            inputOptions={{
                                type: "text",
                                required: true,
                                onChange: (event) => changeHandler(event),
                                name: "password",
                            }}/>

                    <div className='buttons-container'>
                        <ButtonComponent buttonType="submit" type='submit'>Sign In</ButtonComponent>
                        <ButtonComponent buttonType="google" type='button' onClick={() => signInWithGoogle()}>Google
                            Sign
                            In</ButtonComponent>
                    </div>

                </form>
            </div>
    );
}

export default SignInFormComponent;