import React from "react";
import { AuthFormContainer } from "./auth.style";
import { Header2 } from "global.style";
import { z } from "zod";
import InputField from "@/components/Form/InputField";
import { RegisterFormValues } from "@/features/auth/type";
import Form from "@/components/Form/Form";
import { registerWithEmailAndPassword } from "../api/register";

const schema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(7, "Required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });

const initialValues = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const Register = () => {
  return (
    <AuthFormContainer>
      <div className="u-margin-bottom-medium">
        <Header2>Register</Header2>
      </div>
      <Form<RegisterFormValues>
        onSubmitHandler={registerWithEmailAndPassword}
        schema={schema}
        initialValues={initialValues}
      >
        <InputField
          label="Name"
          name="name"
          type="text"
          placeholder="Please input your name"
        />
        <InputField label="Email" name="email" type="email" placeholder={""} />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder={""}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder={""}
        />
      </Form>
    </AuthFormContainer>
  );
};

export default Register;
