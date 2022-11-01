import './sign-up-form.styles.scss';

import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/frebase.utils";
import FormInputComponent from "../../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert('Password does not match');
            return;
        }

        try {
            const result = await createAuthUserWithEmailAndPassword(email, password);
            console.log(result);
            await createUserDocumentFromAuth(result?.user, {displayName});
            resetFormFields();
        } catch (error: any) {

            if (error.code = 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }

    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
            <div className='sign-up-container'>
                <h1>Sign up with your email and password</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <FormInputComponent
                            label='Display name'
                            required
                            type="text"
                            onChange={(event) => changeHandler(event)}
                            name="displayName"
                            value={displayName}/>

                    <FormInputComponent
                            label='Email'
                            required
                            type="email"
                            onChange={(event) => changeHandler(event)}
                            name="email"
                            value={email}/>

                    <FormInputComponent
                            label='Password'
                            required
                            type=""
                            onChange={(event) => changeHandler(event)}
                            name="password"
                            value={password}/>

                    <FormInputComponent
                            label='Confirm password'
                            required
                            type=""
                            onChange={(event) => changeHandler(event)}
                            name="confirmPassword"
                            value={confirmPassword}/>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
    );
}

export default SignUpFormComponent;