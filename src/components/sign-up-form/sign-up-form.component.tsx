import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/frebase.utils";
import {signInWithEmailAndPassword} from "firebase/auth";

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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
            <div>
                <h1>Sign up with your email and password</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="">Display name</label>
                    <input required type="text" onChange={(event) => handleChange(event)} name="displayName"
                           value={displayName}/>

                    <label htmlFor="">Email</label>
                    <input required type="email" onChange={(event) => handleChange(event)} name="email"
                           value={email}/>

                    <label htmlFor="">Password</label>
                    <input required type="" onChange={(event) => handleChange(event)} name="password"
                           value={password}/>

                    <label htmlFor="">Confirm password</label>
                    <input required type="" onChange={(event) => handleChange(event)} name="confirmPassword"
                           value={confirmPassword}/>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
    );
}

export default SignUpFormComponent;