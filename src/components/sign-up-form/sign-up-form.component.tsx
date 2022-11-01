import {useState} from "react";
import {auth} from "../../utils/firebase/frebase.utils";
import {createUserWithEmailAndPassword} from "firebase/auth";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpFormComponent = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {password, confirmPassword} = event.target;
        if (password == confirmPassword && auth.currentUser) {
            await createUserWithEmailAndPassword(auth, email, password);
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
                    <input required type="password" onChange={(event) => handleChange(event)} name="password"
                           value={password}/>

                    <label htmlFor="">Confirm password</label>
                    <input required type="password" onChange={(event) => handleChange(event)} name="confirmPassword"
                           value={confirmPassword}/>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
    );
}

export default SignUpFormComponent;