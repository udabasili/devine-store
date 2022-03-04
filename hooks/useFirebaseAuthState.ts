import { Context } from "@/context/appContext";
import { auth } from "@/lib/firebaseClient";
import { User } from "firebase/auth";
import { useState, useEffect, useContext } from "react";

export type UserProps = {
    uid: string
    displayName: string
    email: string
}

const formatAuthUser = (user: User): UserProps => ({
    uid: user.uid,
    email: user.email as string,
    displayName: user.displayName as string
  });
  
export default function useFirebaseAuth() {
    const [loading, setLoading] = useState(true);
    const { setCurrentUser } = useContext(Context)
    
  
    const authStateChanged = async (authState: User | null) => {
        setLoading(true)

      if (!authState) {
        const response = setCurrentUser({})
        setLoading(false)
        return;
      }
      
      if (authState) {
        setCurrentUser(formatAuthUser(authState))
      }
      setLoading(false);
    };
  
  // listen for Firebase state change
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(authStateChanged);
      return () => unsubscribe();
    }, []);
  
    
    return {
      loading
    };
  }