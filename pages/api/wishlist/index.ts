import { AuthUser } from "@/features/auth/type";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuth } from "../middleware/checkAuth";
import dbConnect from "@/lib/dbConnect";
import WishList from "@/model/WishList";
import { WishListItemProps } from "@/features/wishlist/types";

export default async function cartHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    await dbConnect();

    let currentUser: AuthUser | undefined = undefined;
    let wishListItems: WishListItemProps[] = [];

    const response = await checkAuth(req, res);

    if (response) {
      currentUser = response;
    }

    switch (method) {
      case "GET":
        const findWishListItem = await WishList.find({
          ownerId: currentUser?.id,
        });

        if (findWishListItem) {
          wishListItems = findWishListItem;
        }
        res.status(200).json({ message: wishListItems });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    const errorObject = error as Error;
    return res.status(500).json({
      message: errorObject.message,
    });
  }
}
