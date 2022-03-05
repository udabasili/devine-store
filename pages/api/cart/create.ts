import { AuthUser } from "@/features/auth/type";
import dbConnect from "@/lib/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuth } from "../middleware/checkAuth";
import User from "@/model/User";
import cors from "../middleware/cors";

export default async function cartHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let currentUser: AuthUser | null = null;
  await cors(req, res)
  await dbConnect();

  try {
    const response = await checkAuth(req, res);

    if (response) {
      currentUser = response;
    }

    switch (method) {
      case "POST":
        const findUser = await User.findOne({
          id: currentUser?.id,
        });
        await findUser.addItemToCart(req.body);
        res.status(200).json({ message: "success" });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    const errorObject = error as Error;
    console.log(errorObject.message);
    return res.status(500).json({
      message: errorObject.message,
    });
  }
}
