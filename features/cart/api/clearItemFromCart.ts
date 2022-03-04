import { apiCall } from '@/lib/axios';


async function clearItemFromCart (itemId: string): Promise<any> {
    return apiCall.delete(`/api/cart/${itemId}`)
}




export default clearItemFromCart