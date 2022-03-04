import { AuthUser } from "@/features/auth/type";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { NextApiRequest, NextApiResponse } from "next"
import { checkAuth } from "../middleware/checkAuth";

export default async function cartHandler(req: NextApiRequest, res: NextApiResponse) {
    const {
      query: { cartId, name },
      method,
    } = req

    let currentUser: AuthUser | null = null;
    await dbConnect();

    try {
      const response = await checkAuth(req, res);

      if (response) {
        currentUser = response;
      }
      
      const findUser = await User.findOne({
        id: currentUser?.id,
      });
    switch (method) {
      case 'PUT':
        await findUser.removeQuantityFromCart(Number(req.body.itemId));
        res.status(200).json({ message: "success" })
        break
      case 'DELETE':
        await findUser.clearItemFromCart(Number(cartId));
        res.status(200).json({ message: "success" })
        break
      default:
        res.setHeader('Allow', ['DELETE', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
      }
    } catch (error) {
      const errorObject = error as Error;
      return res.status(500).json({
        message: errorObject.message,
      });
    }
  }