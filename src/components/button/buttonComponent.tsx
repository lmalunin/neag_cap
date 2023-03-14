import { BaseButton, GoogleSignInButton, InvertedSignInButton } from "./button.styles";
import { FC, ButtonHTMLAttributes } from 'react';

type BUTTON_TYPES = 'google' | 'inverted' | 'submit';

export enum BUTTON_TYPE_CLASSES {
    submit = 'submit',
    google = 'google-sign-in',
    inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.submit): typeof BaseButton => (
    {
        [BUTTON_TYPE_CLASSES.submit]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedSignInButton,

    }[buttonType]
)

export type ButtonProps = {
    children: any,
    buttonType?: BUTTON_TYPE_CLASSES,
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonComponent: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {

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