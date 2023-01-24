import './sign-in-form.styles.scss';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/frebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInFormComponent = () => {

    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log('Hit!');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
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
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
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
                    <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.submit} type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.google} type='button'
                                     onClick={() => signInWithGoogle()}>Google
                        Sign
                        In</ButtonComponent>
                </div>

            </form>
        </div>
    );
}

export default SignInFormComponent;