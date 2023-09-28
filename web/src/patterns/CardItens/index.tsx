/* eslint-disable @next/next/no-img-element */
"use client";
import ButtonCustom from "@/components/ButtonCustom";

import "./styles.scss";

import { IItemProps } from "@/types";
import { IMG_URL } from "@/services/api";

type CardProps = React.ComponentProps<"div"> & {
  itensData: IItemProps[];
};

const CardItens = ({ itensData }: CardProps) => {
  return itensData.map(
    ({ id, sku, name, image, path, price, specialPrice }) => {
      const linkIMG = `${IMG_URL}${image}`;
      return (
        <div key={id} className="Carditem">
          <div className="boxImg">
            <img src={linkIMG} alt={`Imagem ${name}`} />
          </div>
          <div>
            <p>{name}</p>
            <span>
              {specialPrice ? (
                <>
                  <i>
                    R${" "}
                    {parseInt(specialPrice.toString()).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </i>
                  <b>
                    R${" "}
                    {parseInt(specialPrice.toString()).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </b>
                </>
              ) : (
                <b>
                  R${" "}
                  {parseInt(price.toString()).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </b>
              )}
            </span>
            <ButtonCustom isLink={true}> comprar </ButtonCustom>
          </div>
        </div>
      );
    }
  );
};

export default CardItens;
