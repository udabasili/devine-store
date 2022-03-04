import { CartItemProp } from "@/features/cart/types";
import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
    },
    cartItems :[]
    },
    {
        timestamps:true
    }
)

userSchema.methods.addItemToCart = async function(addedItem: CartItemProp){
    try {
        let updatedCartItems = [...this.cartItems]
        let existedItem = updatedCartItems.find(product =>{
            return product.itemId === addedItem.itemId && product.size === addedItem.size ;
        })    
        if(existedItem){
            updatedCartItems =  updatedCartItems.map((item) => ((addedItem.itemId === item.itemId)? 
                ({ ...item, quantity: item.quantity + 1 }): 
                item))    
            this.cartItems =  updatedCartItems;
            
        }
        else{
            this.cartItems = [...updatedCartItems, {...addedItem, quantity:1}]

        }
        return this.save()
            
    } catch (error) {    
        console.log((error as Error).message)    
    }
    
}

userSchema.methods.removeQuantityFromCart = function(itemId: number){
    let updatedCartItems =  [...this.cartItems]  
    const existingCartItem = updatedCartItems.find(
        (cartItem) => cartItem.itemId === itemId,
      );
    
      if (existingCartItem.quantity === 1) {
        this.cartItems =  updatedCartItems.filter((cartItem) => cartItem.itemId !== itemId);
        return this.save()
      }
      this.cartItems =  updatedCartItems.map((item) => (
        (itemId === item.itemId)
          ? ({ ...item, quantity: item.quantity - 1 })
          : item
      ))
    return this.save();
}

userSchema.methods.clearItemFromCart = function(itemId: number){
    let updatedCartItems = [...this.cartItems]

    let existedItem =  updatedCartItems.find(product => {
        return product.itemId === itemId
    }) 
    console.log(existedItem)   
    if(existedItem){
        this.cartItems =  updatedCartItems.filter((cartItem)=>cartItem.itemId !== itemId)
        return this.save();
    }
}


export default mongoose.models.User || mongoose.model('User', userSchema)