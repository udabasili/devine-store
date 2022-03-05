import { AuthUser } from "@/features/auth/type";
import { adminDb } from "@/lib/firebaseAdmin";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuth } from "../middleware/checkAuth";
import User from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import cors from "../middleware/cors";

const db = adminDb;

export default async function cartHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    await cors(req, res)
    await dbConnect();


    let currentUser: AuthUser | undefined = undefined;
    let items:any = [];

    const response = await checkAuth(req, res);

    if (response) {
      currentUser = response
    }


    switch (method) {
      case "GET":
        const findUser = await User.findOne({
          id: currentUser?.id,
        });

        if (findUser){
          items = findUser.cartItems
        }
        res.status(200).json({ message: items});
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    const errorObject = error as Error;
    return res.status(500).json({
      message: errorObject.message,
    });
  }
}
