import { apiCall } from '@/lib/axios';
import { getAuth } from 'firebase/auth';


async function clearItemFromCart (itemId: string): Promise<any> {
    const auth = getAuth();
    const token = await auth.currentUser?.getIdToken(true)
    
    return fetch(`/api/cart/${itemId}`, {
        method: "DELETE",        
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token || ''
        }
    })
}




export default clearItemFromCart