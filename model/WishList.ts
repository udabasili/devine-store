import { CartItemProp } from "@/features/cart/types";
import { WishListItemProps } from "@/features/wishlist/types";
import mongoose from "mongoose"

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const wishListSchema = new Schema<WishListItemProps>({
    itemId:{
        type:Number,
        required:true,
        unique: true
    },
    itemName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    ownerId: {
        type:String,
        required:true,
    }
    },
    
    {
        timestamps:true
    }
)



export default mongoose.models.WishList || mongoose.model<WishListItemProps>('WishList', wishListSchema)