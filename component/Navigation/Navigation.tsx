import React, { useContext, useEffect } from "react";
import Menu from "./Menu";
import {
  NavContainer,
  AppTitle,
  NavList,
  UserNav,
  NavItem,
  NavLink,
  NavHeader,
} from "./navigation.style";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillHeart,
  AiOutlineLogout,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { FaUserAstronaut } from "react-icons/fa";
import CartDropDown from "./CartDropDown";
import { Context } from "@/store/appContext";
import { ContextProps } from "@/store/appContext";
import { toast } from "react-toastify";
import { CartItemProp } from "@/features/cart/types";
import useSwr from "@/hooks/useSwr";
import { Badge } from "./cart.style";
import { WishListItemProps } from "@/features/wishlist/types";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { logOutHandler } from "@/features/auth/api/logout";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

function Navigation() {
  const router = useRouter();
  const { isAuthenticated } = useContext(Context);
  const { data, isError, isLoading } = useSwr<CartItemProp[]>("/api/cart");
  const wishListRecord = useSwr<WishListItemProps[]>("/api/wishlist");

  let cartValues: CartItemProp[] = [];
  let wishListITems: WishListItemProps[] = [];


  if (isError) {
    toast.error(isError);
    return <></>;
  }

  if (data) {
    cartValues = data;
  }

  if (wishListRecord.data) {
    wishListITems = wishListRecord.data
  }

  async function logout() {
    const auth = getAuth();
    if (auth) {
      await signOut(auth);
      await logOutHandler()
      toast.success("Logged out");

    }
  }

  function closeNav() {
    const navList = document.querySelector("#menu-input") as HTMLInputElement;
    navList.checked = false;
  }

  return (
    <NavContainer>
      <Menu />
      {isAuthenticated ? (
        <UserNav>
          <div className="user-info">
            <Link href="/profile" passHref>
              <NavLink>
                <FaUserAstronaut size="3rem" />
              </NavLink>
            </Link>
            <Link href="/wishlist" passHref>
              <NavLink title="wish list">
                <AiFillHeart size="3rem" />
                {wishListITems.length !== 0 && <Badge>{wishListITems.length}</Badge>}
              </NavLink>
            </Link>
            <Link href="/" passHref>
              <NavLink title="logout" onClick={logout}>
                <AiOutlineLogout size="3rem" />
              </NavLink>
            </Link>
          </div>
          <CartDropDown cartValues={cartValues}/>
        </UserNav>
      ) : (
        <UserNav>
          <div className="user-info">
            <Link href="/auth" passHref>
              <NavLink>Sign In</NavLink>
            </Link>
          </div>
        </UserNav>
      )}

      <NavList className="nav-list">
        <NavHeader>
          <AiFillCloseCircle onClick={closeNav} />
        </NavHeader>
        {navLinks.map((link) => (
          <NavItem key={link.name}>
            <Link href={link.link} passHref>
              <NavLink
                className={router.pathname === link.link ? "active" : ""}
              >
                {link.name}
              </NavLink>
            </Link>
          </NavItem>
        ))}
      </NavList>
      <AppTitle>Devine</AppTitle>
    </NavContainer>
  );
}

export default Navigation;
