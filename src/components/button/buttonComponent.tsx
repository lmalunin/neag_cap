import './button.styles.scss';

type BUTTON_TYPES = 'google' | 'inverted';

const BUTTON_TYPE_CLASSES: Record<BUTTON_TYPES, string> = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const ButtonComponent = ({children, buttonType, ...otherProps}) => {
    return (
            <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
                    {...otherProps}
            >
                {children}
            </button>
    )
}

export default ButtonComponent;