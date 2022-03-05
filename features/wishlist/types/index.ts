import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId


export type WishListOTP = {
    itemId: number;
    itemName: string;
    price: number;
    imageUrl: string;
}

export type WishListItemProps = {
    itemId: number;
    itemName: string;
    price: number;
    imageUrl: string;
    ownerId: typeof ObjectId
}