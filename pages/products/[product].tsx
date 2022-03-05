import MainLayout from "@/components/Layout/MainLayout";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useRouter } from "next/router";
import React, { Context, useState } from "react";
import _ from "lodash";
import {
  ProductButtons,
  ProductDetail,
  ProductDetailImage,
  ProductPrice,
  ProductQuantity,
  ProductSize,
  ProductSizes,
} from "../../styles/index.style";
import { getAllClothings } from "@/context/appContext";
import { ProductCardProps } from "@/features/products/types";
import Image from "next/image";
import Button from "@/components/Elements/Button/Button";
import { Header2, Header3 } from "global.style";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import addToCart from "@/features/cart/api/addToCart";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebaseClient";
import { useSWRConfig } from "swr";
import addToWishlist from "@/features/wishlist/api/addToWishlist";
import { useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";

const shoeSizes = [6, 7, 8, 8.5, 9, 10, 10.5, 11, 11.5, 12, 13];

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { mutate } = useSWRConfig()
  const [size, setSize] = useState(shoeSizes[0]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { product } = router.query;
  const AuthUser = useAuthUser()
  const selectedProduct = getAllClothings().find(
    (prod) => prod.id === Number(product)
  ) as ProductCardProps;

  const addProductToCart = async () => {
    setLoading(true);
    const data = {
      itemId: selectedProduct.id,
      imageUrl: selectedProduct.imageUrl,
      itemName: selectedProduct.name,
      quantity,
      size,
      price: selectedProduct.price,
    };
    try {
      if (!AuthUser.email) {
        toast.warn('Only logged in users are allowed to perform this action')
        return
      }
      await addToCart(data);
      mutate('/api/cart')
      setLoading(false);
      toast.success("Added To Cart");
    } catch (error) {
      setLoading(false);
      const errorObject = error as Error;
      toast.error(errorObject.message);
    }
  };

  async function addProductToWishlist () {
    const data = {
      itemId: selectedProduct.id,
      imageUrl: selectedProduct.imageUrl,
      itemName: selectedProduct.name,
      price: selectedProduct.price,
    };
    try {
      if (!AuthUser.email) {
        toast.warn('Only logged in users are allowed to perform this action')
        return
      }
      await addToWishlist(data);
      mutate('/api/wishlist')
      setLoading(false);
      toast.success("Added To WishList");
    } catch (error) {
      setLoading(false);
      const errorObject = error as Error;
      toast.error(errorObject.message);
    }

  }

  

  function reduceQuantity() {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <MainLayout title={selectedProduct.name} description={""}>
      <PageHeader title={selectedProduct.name as string} />
      <ProductDetail>
        <ProductDetailImage>
          <Image
            src={selectedProduct.imageUrl}
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="100%"
            alt={selectedProduct.name}
          />
        </ProductDetailImage>
        <ProductPrice>
          <Header2>{selectedProduct.name}</Header2>
          <Header3>Price: ${selectedProduct.price}</Header3>
        </ProductPrice>
        <ProductSizes>
          <Header3>Sizes</Header3>
          {shoeSizes.map((shoeSize) => (
            <ProductSize
              onClick={() => setSize(shoeSize)}
              key={shoeSize}
              className={shoeSize === size ? "selected" : ""}
            >
              {shoeSize}
            </ProductSize>
          ))}
        </ProductSizes>
        <ProductQuantity>
          <span className="button" onClick={reduceQuantity}>
            <AiOutlineMinus />
          </span>
          <span className="counter">{quantity}</span>
          <span className="button" onClick={increaseQuantity}>
            <AiOutlinePlus />
          </span>
        </ProductQuantity>
        <ProductButtons>
          <Button
            variant="primary"
            isLoading={isLoading}
            onClickHandler={addProductToCart}
            type="button"
            size="lg"
          >
            Add to cart
          </Button>
          <span className="wishlist selected">
            <AiFillHeart fontSize="2.4rem"  onClick={addProductToWishlist}/>
          </span>
        </ProductButtons>
      </ProductDetail>
    </MainLayout>
  );
};



export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser }) => { 
  return {
    props: {},
  };
})

export default withAuthUser()(Product)
