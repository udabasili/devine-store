import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormError, FormLabel } from './form.style';
import { Field } from 'formik';

type FieldWrapperProps = {
    label: string;
    description?: string;
    name: string;
    children: React.ReactNode
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

const FieldWrapper = (props: FieldWrapperProps) => {
    const { label, name, children } = props;
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            {children}
            <FormError name={name} />
        </FormControl>
    )
}

FieldWrapper.propTypes = {}

export default FieldWrapper