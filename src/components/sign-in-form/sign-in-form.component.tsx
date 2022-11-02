import './sign-in-form.styles.scss';

import {useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/frebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

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
            console.log(response);
            resetFormFields();
        } catch (error: any) {

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
                        <ButtonComponent buttonType="google" onClick={() => signInWithGoogle()}>Google Sign
                            In</ButtonComponent>
                    </div>

                </form>
            </div>
    );
}

export default SignInFormComponent;