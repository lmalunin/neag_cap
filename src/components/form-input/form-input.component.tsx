import { FormInputLabel, Group, Input, } from "./form-input.styles";

const FormInputComponent = ({ label, inputOptions }) => {

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