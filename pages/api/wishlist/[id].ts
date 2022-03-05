import { AuthUser } from "@/features/auth/type";
import dbConnect from "@/lib/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { checkAuth } from "../middleware/checkAuth";
import WishList from "@/model/WishList";
import { WishListItemProps } from "@/features/wishlist/types";
import { FirebaseError } from "firebase-admin";

export default async function cartHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { cartId, name },
    method,
  } = req;

  const wishListDTO: WishListItemProps = req.body


  let currentUser: AuthUser | null = null;
  await dbConnect();

  try {
    const response = await checkAuth(req, res);

    if (response) {
      currentUser = response;
    }

    switch (method) {
      case "POST":
          const newWishList = new WishList({
            itemId: wishListDTO.itemId,
            itemName: wishListDTO.itemName,
            price: wishListDTO.price,
            imageUrl: wishListDTO.imageUrl,
            ownerId: currentUser?.id
          })
          await newWishList.save()
        res.status(200).json({ message: "success" });
        break;
      case "DELETE":
        await WishList.findByIdAndDelete(req.body.id);
        res.status(200).json({ message: "success" });
        break;
      default:
        res.setHeader("Allow", ["DELETE", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    const errorObject = error as any;
    if (errorObject.name === 'MongoError'  &&  errorObject.code === 11000) {
      errorObject.message = "Item already exists on wishlist"
    }
    return res.status(500).json({
      message: errorObject.message,
    });
  }
}
