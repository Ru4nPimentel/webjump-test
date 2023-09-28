"use client";
import React from "react";
import CardItens from "../CardItens";
import useFetch from "@/hooks/useFetch";
import { IItensArray } from "@/types";

import "./styles.scss";
import { API_URL } from "@/services/api";

const CardProduct = ({
  typeClothing,
}: {
  typeClothing: "camisetas" | "calcas" | "calcados";
}) => {
  const clothing = {
    camisetas: "1",
    calcas: "2",
    calcados: "3",
  };

  const typeC = clothing[typeClothing];

  const { data } = useFetch<IItensArray>(`${API_URL}${typeC}`);

  return (
    <div className="productItens">
      {data?.items && <CardItens itensData={data?.items} />}
    </div>
  );
};

export default CardProduct;
