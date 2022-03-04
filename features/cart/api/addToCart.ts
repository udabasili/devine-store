import { apiCall } from '@/lib/axios';

export type AddToCartDTO = {
      itemId: number | string;
      itemName: string;
      quantity: number;
      size: number;
      price: number;
    
};

async function addToCart (data : AddToCartDTO): Promise<any> {
    return apiCall.post('/api/cart/create', data)
}



export default addToCart