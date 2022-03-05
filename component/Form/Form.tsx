import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field, Formik, FormikHelpers, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ZodType, ZodTypeDef } from 'zod';
import { FormButtonContainer, FormContainer } from './form.style';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase-admin';
import { firebaseErrors } from '@/data/firebaseErrors';
import { AxiosError } from 'axios';
import Button from '../Elements/Button/Button';
import { useRouter } from 'next/router';

type FormProps<TFormValues, Schema> = {
    children: React.ReactNode
    onSubmitHandler: (data: any) => Promise<any>
    schema: Schema
    initialValues: TFormValues
      
}

type TFormValues = {
    [x: string]: any
}

const FormComponent = 
    <
    TFormValues,
    Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>(props: FormProps<TFormValues, Schema>) => {

    const [isLoading, setLoading] = useState(false)
    const  {children, onSubmitHandler, schema, initialValues} = props
    const router = useRouter()
    console.log(router)

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schema)}
         onSubmit={async (values, { setSubmitting }) => {
           try {
            setLoading(true)
            console.log(values)
            await onSubmitHandler(values)
            setLoading(false)
            if (router.pathname === "/auth"  && router.query?.returnUrl){
              const returnUrl = router.query?.returnUrl;
                router.push(returnUrl as string);
              }
           } catch (error) {
             let errorMessage = ''
             setLoading(false)
							const errorData = (error as AxiosError)
							if (errorData.name === 'FirebaseError'){
								errorMessage = firebaseErrors[(error as FirebaseError).code]
							} else {
								errorMessage = errorData.message
							}
              toast.error(errorMessage)
           }
           
          // alert(JSON.stringify(values, null, 2));
         }}
       >
         <FormContainer >
            {children}
            <Button type="submit" size="md" isLoading={isLoading} variant="primary">
                Log in
              </Button>
         </FormContainer>
       </Formik>
  )
}


FormComponent.propTypes = {}

export default FormComponent