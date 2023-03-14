import { FC, InputHTMLAttributes } from 'react'
import { FormInputLabel, Group, Input, } from "./form-input.styles";

type FormInputProps = {
    label: string;
    inputOptions: any
} & InputHTMLAttributes<HTMLInputElement>

const FormInputComponent: FC<FormInputProps> = ({ label, inputOptions }) => {

    //console.log(inputOptions);

    return (
        <Group>
            <Input {...inputOptions}/>
            {label && (
                <FormInputLabel shrink={inputOptions.value?.length}>
                    {label}
                </FormInputLabel>)}
        </Group>
    );
}

export default FormInputComponent;