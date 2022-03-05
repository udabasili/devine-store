import { adminAuth } from '@/lib/firebaseAdmin'
import { NextApiRequest, NextApiResponse } from 'next'
import cors from '../middleware/cors'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await cors(req, res)
      await adminAuth.updateUser(req.body.uid, {
          displayName: req.body.name
      })

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