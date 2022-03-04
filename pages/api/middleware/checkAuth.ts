import { AuthUser } from "@/features/auth/type";
import { adminAuth } from "@/lib/firebaseAdmin";
import { NextApiRequest, NextApiResponse } from "next";
import User from '@/model/User'

export const checkAuth = async (req: NextApiRequest, res: NextApiResponse) => {

    let currentUser : AuthUser
    try {

        if (!(req.headers && req.headers.authorization)) {
            throw Error;
        }
        const token = req.headers.authorization
        if (token === 'unauthenticated') {
            throw Error;

        } 

        try {
            const decode = await adminAuth.verifyIdToken(token)
              currentUser = {
                id: decode.uid,
                email: decode.email as string,
                name: decode.displayName || 'user',
                role: 'USER'
              }

              const findUser = await User.findOne({
                id: decode.uid
              })
              console.log(currentUser)
              if (!findUser){
                const newRecord = new User(currentUser)
                await newRecord.save()
                
              }
      
            return currentUser;
          } catch (e) {
            throw Error;
        }
    } catch (error) {
        return res.status(401).json({
            message: 'UnAuthorized'
        })
    }
}

