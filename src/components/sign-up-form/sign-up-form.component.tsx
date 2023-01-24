import './sign-up-form.styles.scss';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/frebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    console.log('Hit!');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

        try {
            const result = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(result?.user, { displayName });
            dispatch(setCurrentUser(result?.user));
            resetFormFields();
        } catch (error: any) {

            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }

    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInputComponent
                    label='Display name'
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: (event) => changeHandler(event),
                        name: "displayName",
                        value: displayName
                    }}
                />

                <FormInputComponent
                    label='Email'
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: (event) => changeHandler(event),
                        name: "email",
                        value: email
                    }}/>

                <FormInputComponent
                    label='Password'
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: (event) => changeHandler(event),
                        name: "password",
                        value: password
                    }}/>

                <FormInputComponent
                    label='Confirm password'
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: (event) => changeHandler(event),
                        name: "confirmPassword",
                        value: confirmPassword
                    }}/>

                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.submit} type='submit'>Sign Up</ButtonComponent>
            </form>
        </div>
    );
}

export default SignUpFormComponent;