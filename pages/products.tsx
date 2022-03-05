import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Filters from "@/features/products/components/Filters";
import SortComponent from "@/features/products/components/SortComponent";
import style from "../styles/product.module.css";
import Products from "@/features/products/components/Products";
import useDisclosure from "@/hooks/useDisclosure";

const ProductsPage = () => {
  const { open, close, isOpen } = useDisclosure();

  return (
    <MainLayout title="Products" description={""}>
      <PageHeader title="Products" />
      <div className={style.content}>
        <Filters closeFilterDrawer={close} filterDrawerOpen={isOpen} />
        <Products />
        <SortComponent openFilterDrawer={open} />
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
