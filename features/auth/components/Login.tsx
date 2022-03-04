import React from 'react'
import { AuthFormContainer } from './auth.style'
import { Header2 } from 'global.style'
import { z } from 'zod';
import InputField from '@/components/Form/InputField';
import { LoginFormValues } from '@/features/auth/type';
import Form from '@/components/Form/Form'
import { loginWithEmailAndPassword } from '@/features/auth/api/login';


const schema = z.object({
    email: z.string().email(),
    password: z.string().min(7, 'Required'),
});

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
  return (
    <AuthFormContainer>
      <div className="u-margin-bottom-medium">
        <Header2>
            Login
        </Header2>
      </div>
      <Form<LoginFormValues , typeof schema> 
        onSubmitHandler={loginWithEmailAndPassword} 
        schema={schema} 
        initialValues={initialValues}>
        <InputField
          label="Email"
          name="email" 
          type="email" 
          placeholder='Please input your name'/>
        <InputField
          label="Password"
          name="password" 
          type="password" 
          placeholder={''} />
        </Form>
    </AuthFormContainer>
  )
}


export default Login