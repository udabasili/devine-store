import { adminAuth } from '@/lib/firebaseAdmin'
import initAuth from '@/utils/initAuth'
import { NextApiRequest, NextApiResponse } from 'next'
import { setAuthCookies } from 'next-firebase-auth'
import cors from '../middleware/cors'

initAuth()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await adminAuth.updateUser(req.body.uid, {
          displayName: req.body.name
      })
      await setAuthCookies(req, res)
      return res.status(200).json({
        message: 'success'
    })

    } catch (e) {
      const error = e as Error
      return res.status(401).json({
          message: error.message
      })
    }
  }
  
  export default handler