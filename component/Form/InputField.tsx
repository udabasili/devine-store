import { Field } from 'formik';
import React from 'react'
import FieldWrapper from './FieldWrapper'
import { FormInput } from './form.style';

type InputFieldProps = {
    name: string 
    type: 'text' | 'email' | 'password' | number
    placeholder: string | number
    label: string
};

const InputField = (props: InputFieldProps) => {

    const { name, type, placeholder, label, } = props
    return (
        <FieldWrapper name={name} label={label}   >
            <FormInput type={type} name={name} placeholder={placeholder}/>
        </FieldWrapper>
    )
}

export default InputField