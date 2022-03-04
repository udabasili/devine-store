import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader'
import useFirebaseAuth from '@/hooks/useFirebaseAuthState'
import React from 'react'

type ProviderProps = {
    children: React.ReactNode
}

const FirebaseAuthState = ({ children }: ProviderProps) => {

    const auth = useFirebaseAuth()

    if (auth.loading) {
        return <FullScreenLoader/>
    }
  return (
    <>{children}</>
  )
}

export default FirebaseAuthState