import { UserResponse } from '@/features/auth/type';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export type LoginCredentialsDTO = {
    email: string;
    password: string;
};

export const loginWithEmailAndPassword = async (data: LoginCredentialsDTO) => {
    const auth = getAuth();
    const { email, password } = data
    return signInWithEmailAndPassword(auth, email, password)
};