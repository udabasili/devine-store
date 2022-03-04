import { apiCall } from '@/lib/axios';

export type CartDTO = {
    itemId: string;
};

async function removeOneItemFromCart (itemId: string): Promise<any> {
    return apiCall.delete(`/api/cart/${itemId}`)
}


export default removeOneItemFromCart