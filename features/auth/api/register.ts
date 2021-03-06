import { RegisterFormValues, UserResponse } from '@/features/auth/type';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export const registerWithEmailAndPassword = async (data: RegisterFormValues) => {
    const auth = getAuth();
    const response  = await createUserWithEmailAndPassword(auth, data.email, data.password)

    const token = await auth.currentUser?.getIdToken(true)

    return await fetch('/api/auth/register',{
        method: "POST",
        body: JSON.stringify({
            uid: response.user.uid,
            ...data
        }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: token || ''
            }
        }
    )
};