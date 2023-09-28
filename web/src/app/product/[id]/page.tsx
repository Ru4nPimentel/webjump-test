import BreadCrumbs from "@/components/BreadCrumbs";
import ProductFilter from "@/patterns/ProductFilter";
import Showcase from "@/patterns/Showcase";
import React from "react";

const Product = ({
  params,
}: {
  params: { id: "camisetas" | "calcas" | "calcados" };
}) => {
  return (
    <main className="product">
      <BreadCrumbs text={params.id} />
      <div className="grid">
        <ProductFilter />
        <Showcase pgInfo={params.id} />
      </div>
    </main>
  );
};

export default Product;
