import React from "react";
import { MdViewList, MdViewModule } from "react-icons/md";
import "./styles.scss";

const TypeView = () => {
  return (
    <div className="typeView">
      <div className="boxIcons">
        <button type="button">
          <MdViewModule />
        </button>
        <button type="button">
          <MdViewList />
        </button>
      </div>
      <div className="boxSelect">
        <div className="selectCustom">
          <label htmlFor="orderBy">ORDENAR POR </label>
          <select name="orderBy" id="orderBy">
            <option value="preco">Preço</option>
            <option value="tamanho">Tamanho</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TypeView;
