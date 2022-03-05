import { apiCall } from '@/lib/axios';
import { getAuth } from 'firebase/auth';
import { WishListItemProps, WishListOTP } from '../types';

async function addToWishlist (data : WishListOTP): Promise<any> {

    const auth = getAuth();
    const token = await auth.currentUser?.getIdToken(true)
    
    return fetch('/api/wishlist/create', {
        method: "POST",
        body: JSON.stringify(data),
        
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token || ''
        }
    })

}



export default addToWishlist