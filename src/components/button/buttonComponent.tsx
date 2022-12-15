import { BaseButton, GoogleSignInButton, InvertedSignInButton } from "./button.styles";

type BUTTON_TYPES = 'google' | 'inverted' | 'submit';

export const BUTTON_TYPE_CLASSES: Record<BUTTON_TYPES, string> = {
    submit: 'submit',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.submit) => (
    {
        [BUTTON_TYPE_CLASSES.submit]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedSignInButton,

    }[buttonType]
)

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {

    const CustomButton = getButton(buttonType);

    return (
        <CustomButton
            {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default ButtonComponent;