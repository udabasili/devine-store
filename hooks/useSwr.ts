import { fetcher } from "@/lib/axios"
import { auth } from "@/lib/firebaseClient"
import useSWR from 'swr'

function useSwr<ReturnType> (url: string) {
    const currentUserId = auth.currentUser?.uid
    const { data, error } = useSWR<ReturnType>( currentUserId ? url : null, fetcher)
  
    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
}

export default useSwr