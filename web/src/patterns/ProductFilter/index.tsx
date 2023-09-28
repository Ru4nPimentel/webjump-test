"use client";
import React from "react";
import NavCategories from "../NavCategories";
import Link from "next/link";

import "./styles.scss";

const ProductFilter = () => {
  return (
    <aside className="productFilter">
      <h2>FILTRE POR</h2>
      <div className="typeFilter">
        <div className="divFilter">
          <h3>CATEGORIAS</h3>
          <NavCategories className="categoriesFilter" />
        </div>
        <div className="divFilter">
          <h3>CORES</h3>
          <div className="filterColor">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="divFilter">
          <h3>TIPO</h3>
          <div className="categoriesFilter">
            <menu>
              <li>
                <Link href="#">Corrida</Link>
              </li>
              <li>
                <Link href="#">Caminhada</Link>
              </li>
              <li>
                <Link href="#">Casual</Link>
              </li>
              <li>
                <Link href="#">Social</Link>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;
