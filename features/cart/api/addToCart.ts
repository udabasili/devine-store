import { apiCall } from '@/lib/axios';
import { getAuth } from 'firebase/auth';

export type AddToCartDTO = {
      itemId: number | string;
      itemName: string;
      quantity: number;
      size: number;
      price: number;
    
};

async function addToCart (data : AddToCartDTO): Promise<any> {

    const auth = getAuth();
    const token = await auth.currentUser?.getIdToken(true)
    
    return fetch('/api/cart/create', {
        method: "POST",
        body: JSON.stringify(data),
        
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token || ''
        }
    })

}



export default addToCart