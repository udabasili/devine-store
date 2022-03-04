export type AuthUser = {
    id: string;
    email: string;
    name: string;
    role: 'ADMIN' | 'USER';
  };

  
export type UserResponse = {
    jwt: string;
    user: AuthUser;
};

export type LoginFormValues = {
    email: string
    password: string
}

export type RegisterFormValues = {
    email: string
    name: string;
    password: string
    confirmPassword: string
    
}