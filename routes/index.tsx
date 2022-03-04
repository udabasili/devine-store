import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { publicRoutes, PublicRoutesProps } from './public';
import { privateRoutes, PrivateRoutProps } from './protected';
import { Context } from '@/context/appContext';

type RouteGuardProps  = {
    children: JSX.Element
}



export const RouteGuard = ({ children }: RouteGuardProps): JSX.Element => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const {isAuthenticated} = useContext(Context)

    function authCheck (url:  string) {
        const path = url.split('?')[0]
    
        if (privateRoutes.includes(path as PrivateRoutProps) &&  !isAuthenticated) {
            setAuthorized(false);
            router.push({
                pathname: '/auth',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    useEffect(() => {
        authCheck(router.asPath)

        const hideContent = () => setAuthorized(false)
        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', authCheck)
        
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [])

    return (authorized ? children : <></>);
    
}
