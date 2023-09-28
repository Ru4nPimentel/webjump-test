import ButtonCustom from "../ButtonCustom";
import { IoMdCart } from "react-icons/io";
import "./styles.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="boxSearch" role="search">
        <input type="text" />
        <ButtonCustom type="button" className="btnSearch">
          Buscar
        </ButtonCustom>
      </div>
      <div className="cartMobile">
        <IoMdCart />
      </div>
    </div>
  );
};

export default Search;
