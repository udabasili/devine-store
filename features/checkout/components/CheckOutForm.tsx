import React from 'react'
import PropTypes from 'prop-types'
import Form from '@/components/Form/Form'
import { z } from 'zod';
import InputField from '@/components/Form/InputField';
import { CheckoutFormValues } from '../type';

const initialValues = {
    name: '',
    email: "",
    city: '',
    state: '',
    country: ''
}

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    city: z.string(),
    state: z.string(),
    country: z.string()
});

  
const CheckOutForm = () => {
  return (
    <Form<CheckoutFormValues> onSubmitHandler={async (data: any) => {}} schema={schema} initialValues={initialValues}>
		<InputField
			label="Name"
			name="name" 
			type="text" 
			placeholder='Please input your name'/>
		<InputField
			label="Email"
			name="email" 
			type="email" 
			placeholder={''} />
		<InputField
			label="City"
			name="city" 
			type="text" 
			placeholder={''} />
		<InputField
			label="State"
			name="state" 
			type="text" 
			placeholder={''} />
		<InputField
			label="Country"
			name="country" 
			type="text" 
			placeholder={''} />
         
    </Form>
  )
}

CheckOutForm.propTypes = {}

export default CheckOutForm